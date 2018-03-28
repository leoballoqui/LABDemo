using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.ViewModels
{
    public class AppointmentVM2
    {
        public int ID { get; set; }
        public int ParticipantID { get; set; }
        public int DoctorID { get; set; }
        public string ParticipantFullName { get; set; }
        public string DoctorFullName { get; set; }
        public DateTime Date { get; set; }
        public string TimeSlot { get; set; }

        public AppointmentVM2()
        {
        }

        public AppointmentVM2( Appointment app)
        {
            ID = app.ID.Value;
            ParticipantID = app.ParticipantID;
            DoctorID = app.DoctorID;
            ParticipantFullName = app.Participant.FirstName + " " + app.Participant.LastName;
            DoctorFullName = app.Doctor.FullName;
            Date = app.Date;
            TimeSlot = app.Time;
        }
    }
}