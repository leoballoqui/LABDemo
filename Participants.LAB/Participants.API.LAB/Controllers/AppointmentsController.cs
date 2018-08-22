using Participants.API.LAB.Models;
using Participants.API.LAB.ViewModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web.Http;
using System.Web.Http.Description;

namespace Participants.API.LAB.Controllers
{
    [Authorize]
    public class AppointmentsController : BaseController
    {
        [HttpPost]
        public IEnumerable<AppointmentsVM> GetAppointmentsByWeek(CalendarVM selection)
        {
            FillDB();

            List<AppointmentsVM> result = new List<AppointmentsVM>();
            int dayTotalCapacity = (selection.DoctorID != 0) ? 16 : db.Doctors.Count() * 16;
            DateTime monday = selection.Date.AddDays(-(int)selection.Date.DayOfWeek + (int)DayOfWeek.Monday);
            DateTime sunday = monday.AddDays(6);

            List<Appointment> apps = null;
            if (selection.DoctorID == 0)
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) >= monday.Date && DbFunctions.TruncateTime(a.Date) <= sunday.Date).ToList();
            else
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) >= monday.Date && DbFunctions.TruncateTime(a.Date) <= sunday.Date && a.DoctorID == selection.DoctorID).ToList();

            AppointmentsVM app;
            DateTime day;
            for (int i = 0; i < 7; i++)
            {
                app = new AppointmentsVM();
                day = monday.AddDays(i);
                app.Period = day.DayOfWeek.ToString() + ", " + day.ToString("MM/dd/yyy");
                app.TotalCapacity = dayTotalCapacity;
                app.Appointments = apps.Where(a => a.Date.Date == day.Date).Count();
                result.Add(app);
            }
            return result;
        }

        [HttpPost]
        public IEnumerable<AppointmentsVM> GetAppointmentsByDay(CalendarVM selection)
        {
            List<AppointmentsVM> result = new List<AppointmentsVM>();
            int slotTotalCapacity = (selection.DoctorID != 0) ? 1 : db.Doctors.Count();

            List<Appointment> apps = null;
            if (selection.DoctorID == 0)
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == selection.Date.Date && a.Status != (int)AppointmentStatus.Canceled).ToList();
            else
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == selection.Date.Date && a.DoctorID == selection.DoctorID && a.Status != (int)AppointmentStatus.Canceled).ToList();

            AppointmentsVM app;
            for (int i = 0; i < 12; i++)
            {
                app = new AppointmentsVM();
                app.Period = GetAppointmentSlotByClinic(1, i);
                app.TotalCapacity = slotTotalCapacity;
                app.Appointments = apps.Where(a => a.TimeSlot == i).Count();
                result.Add(app);
            }
            return result;
        }

        [HttpPost]
        public IEnumerable<AvailabilityVM> GetDoctorsAvailability([FromBody]DateTime date)
        {
            List<AvailabilityVM> result = new List<AvailabilityVM>();
            List<Appointment> apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == date.Date && a.Status != (int)AppointmentStatus.Canceled).ToList();
            List<Doctor> docs = db.Doctors.ToList();

            AvailabilityVM availability = null;
            SlotAvailabilityVM slotAvail = null;
            foreach (Doctor doc in docs)
            {
                availability = new AvailabilityVM();
                availability.DoctorID = doc.ID.Value;
                availability.Date = date.Date;
                for (int i = 0; i < 12; i++)
                {
                    slotAvail = new SlotAvailabilityVM();
                    slotAvail.Index = i;
                    slotAvail.Period = GetAppointmentSlotByClinic(1, i);
                    slotAvail.isAvailable = apps.Where(app => app.DoctorID == doc.ID.Value && app.TimeSlot == i).FirstOrDefault() == null;
                    availability.SlotsAvailability.Add(slotAvail);
                }
                result.Add(availability);
            }

            return result;
        }

        [HttpPost]
        public Object GetAppointmentsDetailsByDay([FromBody]DateTime date)
        {
            List<AppointmentDetailsVM> details = new List<AppointmentDetailsVM>();
            List<string> periods = new List<string>();
            List<Appointment> apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == date.Date).Include("Doctor").Include("Participant").ToList();

            AppointmentDetailsVM appDetails;
            foreach (Appointment appointment in apps)
            {
                appDetails = new AppointmentDetailsVM();
                appDetails.AppointmentID = appointment.ID.Value;
                appDetails.Date = date.Date.AddHours(10);
                appDetails.DoctorID = appointment.DoctorID;
                appDetails.DoctorName = appointment.Doctor.FullName;
                appDetails.ParticipantID = appointment.ParticipantID;
                appDetails.ParticipantName = appointment.Participant.FullName;
                appDetails.ParticipantContactInfo = GetContactInfo(appointment.Participant);
                appDetails.Slot = appointment.TimeSlot;
                appDetails.Period = GetAppointmentSlotByClinic(1, appointment.TimeSlot);
                appDetails.Status = appointment.Status;
                appDetails.StatusName = GetAppointmentStatusName(appointment.Status);
                details.Add(appDetails);
            }
            for (int i = 0; i < 12; i++)
            {
                periods.Add(GetAppointmentSlotByClinic(1, i));
            }
            return new { appointments = details.OrderBy(d => d.Slot), slots = periods };
        }

        [HttpPost]
        public Object GetAppointmentsDetailsByParticipant([FromBody]AppointmentsByPatient selection)
        {
            List<AppointmentDetailsVM> details = new List<AppointmentDetailsVM>();
            List<string> periods = new List<string>();
            List<Appointment> apps = new List<Appointment>();
            if (!String.IsNullOrEmpty(selection.Name) || !String.IsNullOrEmpty(selection.Phone))
            {
                DateTime past = selection.Past ? DateTime.MinValue.Date : DateTime.Now.Date;
                DateTime future = (selection.Future || !selection.Past) ? DateTime.MaxValue.Date : DateTime.Now.Date;
                IQueryable<Appointment> queryWhere = db.Appointments;

                if (!String.IsNullOrEmpty(selection.Name))
                    queryWhere = queryWhere.Where(a => a.Participant.FirstName.Contains(selection.Name) || a.Participant.LastName.Contains(selection.Name));
                if (!String.IsNullOrEmpty(selection.Phone))
                    queryWhere = queryWhere.Where(a => a.Participant.PhoneNumber.Contains(selection.Phone) || a.Participant.SecPhoneNumber.Contains(selection.Phone));

                apps = queryWhere.Where(a => DbFunctions.TruncateTime(a.Date) >= past.Date &&
                                             DbFunctions.TruncateTime(a.Date) <= future.Date).Take(100).Include("Doctor").Include("Participant").ToList();
            }

            AppointmentDetailsVM appDetails;
            foreach (Appointment appointment in apps)
            {
                appDetails = new AppointmentDetailsVM();
                appDetails.AppointmentID = appointment.ID.Value;
                appDetails.Date = appointment.Date.Date;
                appDetails.DoctorID = appointment.DoctorID;
                appDetails.DoctorName = appointment.Doctor.FullName;
                appDetails.ParticipantID = appointment.ParticipantID;
                appDetails.ParticipantName = appointment.Participant.FullName;
                appDetails.ParticipantContactInfo = GetContactInfo(appointment.Participant);
                appDetails.Slot = appointment.TimeSlot;
                appDetails.Period = GetAppointmentSlotByClinic(1, appointment.TimeSlot);
                appDetails.Status = appointment.Status;
                appDetails.StatusName = GetAppointmentStatusName(appointment.Status);
                details.Add(appDetails);
            }
            for (int i = 0; i < 12; i++)
            {
                periods.Add(GetAppointmentSlotByClinic(1, i));
            }
            return new { appointments = details.OrderByDescending(d => d.Date).ThenBy(d => d.Slot), slots = periods };
        }

        // GET: api/Appointments/5
        public string Get(int id)
        {
            return "value";
        }

        [ResponseType(typeof(Appointment))]
        public IHttpActionResult AddAppointment(Appointment appointment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (db.Appointments.Where(app => app.DoctorID == appointment.DoctorID &&
                                             app.TimeSlot == appointment.TimeSlot &&
                                             app.Date == appointment.Date.Date &&
                                             app.Status != (int)AppointmentStatus.Canceled).FirstOrDefault() != null)
                return StatusCode(HttpStatusCode.Conflict);

            appointment.Status = (int)AppointmentStatus.Created;
            appointment.Date = appointment.Date.Date;
            appointment.ClinicID = 1;
            db.Appointments.Add(appointment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = appointment.ID }, appointment);
        }

        [HttpPost]
        public void SetAppointmentStatus(Appointment appointment)
        {
            Appointment app = db.Appointments.Where(a => a.ID == appointment.ID).FirstOrDefault();
            if (app != null)
            {
                if (appointment.Status != 2 || app.Status < 2)
                {
                    app.Status = appointment.Status;
                    db.SaveChanges();
                }
                if (appointment.Status == 2)
                {
                    // Notify via Email or add mechanism to notify via sms
                }
            }
        }

        // PUT: api/Appointments/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Appointments/5
        public void Delete(int id)
        {
        }

        private void FillDB()
        {
            if (db.Appointments.Count() > 0)
                return;

            Appointment a = new Appointment();
            a.ParticipantID = 1;
            a.DoctorID = 1;
            a.Date = DateTime.Today.Date;
            a.TimeSlot = 1;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 2;
            a.DoctorID = 3;
            a.Date = DateTime.Today.Date;
            a.TimeSlot = 1;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 3;
            a.DoctorID = 2;
            a.Date = DateTime.Today.AddDays(1).Date;
            a.TimeSlot = 2;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 3;
            a.DoctorID = 1;
            a.Date = DateTime.Today.Date;
            a.TimeSlot = 3;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 2;
            a.DoctorID = 1;
            a.Date = DateTime.Today.Date;
            a.TimeSlot = 4;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 1;
            a.DoctorID = 2;
            a.Date = DateTime.Today.AddDays(1).Date;
            a.TimeSlot = 5;
            a.Status = (int)AppointmentStatus.Created;
            a.ClinicID = 1;
            db.Appointments.Add(a);

            db.SaveChanges();
        }

        private string GetAppointmentSlotByClinic(int clinicID, int slot)
        {
            //Leo - 03/28/2018: At some point we will need to implement something to make this dynamic
            switch (slot)
            {
                case 0:
                    return "6:00 am - 7:00 am";

                case 1:
                    return "7:00 am - 8:00 am";

                case 2:
                    return "8:00 am - 9:00 am";

                case 3:
                    return "9:00 am - 10:00 am";

                case 4:
                    return "10:00 am - 11:00 am";

                case 5:
                    return "11:00 am - 12:00 m";

                case 6:
                    return "12:00 m - 1:00 pm";

                case 7:
                    return "1:00 pm - 2:00 pm";

                case 8:
                    return "2:00 pm - 3:00 pm";

                case 9:
                    return "3:00 pm - 4:00 pm";

                case 10:
                    return "4:00 pm - 5:00 pm";

                case 11:
                    return "5:00 pm - 6:00 pm";

                default:
                    return "";
            }
        }

        private string GetAppointmentStatusName(int status)
        {
            //Leo - 04/04/2018: At some point we will need to implement something to make this dynamic
            switch (status)
            {
                case 1:
                    return "Created";

                case 2:
                    return "Notified";

                case 3:
                    return "Confirmed";

                case 4:
                    return "Completed";

                case 5:
                    return "Missed";

                case 6:
                    return "Canceled";

                default:
                    return "";
            }
        }

        private string GetContactInfo(Participant participant)
        {
            string contactInfo = "";
            string phone = participant.PhoneNumber.Trim();
            if (String.IsNullOrEmpty(phone))
                phone = participant.SecPhoneNumber.Trim();

            if (!String.IsNullOrEmpty(phone))
                phone = Regex.Replace(phone, @"(\d{3})(\d{3})(\d{4})", "$1-$2-$3");
            else
                phone = "No Phone Number";

            contactInfo = phone;
            string email = participant.EmailAddress.Trim();
            if (!String.IsNullOrEmpty(email))
                contactInfo += ", " + email;
            else
                contactInfo += ", " + "No Email address";

            return contactInfo;
        }
    }
}