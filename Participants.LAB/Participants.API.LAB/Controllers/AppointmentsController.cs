using Participants.API.LAB.Infrastructure;
using Participants.API.LAB.Models;
using Participants.API.LAB.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Participants.API.LAB.Controllers
{
    public class AppointmentsController : ApiController
    {
        private MainDbContext db = new MainDbContext();

        [HttpPost]
        public IEnumerable<AppointmentVM> GetAppointmentsByWeek([FromBody]DateTime date)
        {
            FillDB();

            List<AppointmentVM> result = new List<AppointmentVM>();
            int dayTotalCapacity = db.Doctors.Count() * 16;
            DateTime monday = date.AddDays(-(int)date.DayOfWeek + (int)DayOfWeek.Monday);
            DateTime sunday = monday.AddDays(6);

            List<Appointment> apps = db.Appointments.Where(a => a.Date >= monday && a.Date <= sunday).ToList();
            for (int i = 0; i < 7; i++)
            {
                AppointmentVM app = new AppointmentVM();
                DateTime day = monday.AddDays(i);
                app.Period = day.DayOfWeek.ToString() + ", " + day.ToString("MM/dd/yyy");
                app.TotalCapacity = dayTotalCapacity;
                app.Appointments = apps.Where(a => a.Date.Date == day.Date).Count();
                result.Add(app);
            }
            return result;
        }

        public IEnumerable<string> GetAppointmentsByDate()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Appointments/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Appointments
        public void Post([FromBody]string value)
        {
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
    }
}
