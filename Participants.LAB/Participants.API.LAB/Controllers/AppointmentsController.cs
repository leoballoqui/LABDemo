using Participants.API.LAB.Infrastructure;
using Participants.API.LAB.Models;
using Participants.API.LAB.ViewModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace Participants.API.LAB.Controllers
{
    public class AppointmentsController : ApiController
    {
        private MainDbContext db = new MainDbContext();

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
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == selection.Date.Date).ToList();
            else
                apps = db.Appointments.Where(a => DbFunctions.TruncateTime(a.Date) == selection.Date.Date && a.DoctorID == selection.DoctorID).ToList();

            AppointmentsVM app;
            for (int i = 0; i < 12; i++)
            {
                app = new AppointmentsVM();
                app.Period = GetAppointmentSlotByClinic(1, i);
                app.TotalCapacity = slotTotalCapacity;
                app.Appointments = apps.Where(a => a.Time == i.ToString()).Count();
                result.Add(app);
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
                appDetails.Date = date.Date;
                appDetails.DoctorID = appointment.DoctorID;
                appDetails.DoctorName = appointment.Doctor.FullName;
                appDetails.ParticipantID = appointment.ParticipantID;
                appDetails.ParticipantName = appointment.Participant.FullName;
                appDetails.Slot = int.Parse(appointment.Time);
                appDetails.Period = GetAppointmentSlotByClinic(1, int.Parse(appointment.Time));
                details.Add(appDetails);
            }
            for (int i = 0; i < 12; i++)
            {
                periods.Add(GetAppointmentSlotByClinic(1, i));
            }
            return new {appointments = details, slots = periods};
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

            db.Appointments.Add(appointment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = appointment.ID }, appointment);
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
            a.Date = DateTime.Today;
            a.Time = "1";
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 2;
            a.DoctorID = 1;
            a.Date = DateTime.Today;
            a.Time = "1";
            db.Appointments.Add(a);

            a = new Appointment();
            a.ParticipantID = 3;
            a.DoctorID = 2;
            a.Date = DateTime.Today.AddDays(1);
            a.Time = "2";
            db.Appointments.Add(a);

            db.SaveChanges();
        }

        private string GetAppointmentSlotByClinic(int clinicID, int slot)
        {
            //Leo - 03/28/2108: At some point we will need to implement something to make this dynamic
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
    }
}
