using Participants.API.LAB.Models;
using Participants.API.LAB.ViewModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;

namespace Participants.API.LAB.Controllers
{
    [Authorize]
    public class TimeOffsController : BaseController
    {
        private DateTime min = DateTime.MinValue;

        // GET: api/TimeOffs
        public IQueryable<TimeOff> GetTimeOffs()
        {
            return db.TimeOffs;
        }

        // GET: api/TimeOffs/5
        [ResponseType(typeof(TimeOff))]
        public IHttpActionResult GetTimeOff(int id)
        {
            TimeOff timeOff = db.TimeOffs.Find(id);
            if (timeOff == null)
            {
                return NotFound();
            }

            return Ok(timeOff);
        }

        [HttpPost]
        public IEnumerable<TimeOff> GetTimeOffByDoctor(TimeOffVM timeOff)
        {
            FillDB();
            List<TimeOff> doctorsTimeOff = null;
            if (!timeOff.From.HasValue || !timeOff.To.HasValue || timeOff.From.Value.Date > timeOff.To.Value.Date)
                doctorsTimeOff = db.TimeOffs.Where(toff => toff.DoctorID == timeOff.DoctorID).Include("Doctor").ToList();
            else
                doctorsTimeOff = db.TimeOffs.Where(toff => toff.DoctorID == timeOff.DoctorID &&
                                                           toff.From.Date >= timeOff.From.Value.Date &&
                                                           toff.From.Date <= timeOff.To.Value.Date).Include("Doctor").ToList();
            return doctorsTimeOff;
        }

        [HttpPost]
        [ResponseType(typeof(TimeOff))]
        public IHttpActionResult AddTimeOff(TimeOff timeOff)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            timeOff.ClinicID = 1;
            db.TimeOffs.Add(timeOff);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = timeOff.ID }, timeOff);
        }

        [HttpPost]
        [ResponseType(typeof(TimeOff))]
        public IHttpActionResult DeleteTimeOff([FromBody]int id)
        {
            TimeOff timeOff = db.TimeOffs.Find(id);
            if (timeOff == null)
            {
                return NotFound();
            }

            db.TimeOffs.Remove(timeOff);
            db.SaveChanges();

            return Ok(timeOff);
        }

        [HttpPost]
        [ResponseType(typeof(TimeOff))]
        public IHttpActionResult CancelAppointments([FromBody]int id)
        {
            TimeOff timeOff = db.TimeOffs.Find(id);
            if (timeOff == null)
            {
                return NotFound();
            }
            List<Appointment> appointments = db.Appointments.Where(a => a.DoctorID == timeOff.DoctorID &&
                                                                        DbFunctions.TruncateTime(a.Date) >= timeOff.From.Date &&
                                                                        DbFunctions.TruncateTime(a.Date) <= timeOff.To.Date).ToList();
            foreach (var app in appointments)
                app.Status = (int)AppointmentStatus.Canceled;

            timeOff.Status = (int)TimeOffStatus.Confirmed;
            db.SaveChanges();
            return Ok();
        }

        [HttpPost]
        [ResponseType(typeof(TimeOff))]
        public IHttpActionResult NotifyParticipants([FromBody]int id)
        {
            TimeOff timeOff = db.TimeOffs.Find(id);
            if (timeOff == null)
            {
                return NotFound();
            }
            List<Appointment> appointments = db.Appointments.Where(a => a.DoctorID == timeOff.DoctorID &&
                                                                        DbFunctions.TruncateTime(a.Date) >= timeOff.From.Date &&
                                                                        DbFunctions.TruncateTime(a.Date) <= timeOff.To.Date).Include("Participant").ToList();
            foreach (var app in appointments)
            {
                string email = app.Participant.EmailAddress;
                // Notify via Email or add mechanism to notify via sms
            }
            if (timeOff.Status < (int)TimeOffStatus.Notified)
                timeOff.Status = (int)TimeOffStatus.Notified;
            db.SaveChanges();
            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TimeOffExists(int id)
        {
            return db.TimeOffs.Count(e => e.ID == id) > 0;
        }

        private void FillDB()
        {
            if (db.TimeOffs.Count() > 0)
                return;

            TimeOff to = new TimeOff();
            to.DoctorID = 1;
            to.From = DateTime.Today.AddDays(30).Date;
            to.To = DateTime.Today.AddDays(37).Date;
            to.ClinicID = 1;
            db.TimeOffs.Add(to);

            to = new TimeOff();
            to.DoctorID = 2;
            to.From = DateTime.Today.AddDays(15).Date;
            to.To = DateTime.Today.AddDays(22).Date;
            to.ClinicID = 1;
            db.TimeOffs.Add(to);

            db.SaveChanges();
        }
    }
}