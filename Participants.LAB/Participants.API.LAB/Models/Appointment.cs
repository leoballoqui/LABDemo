using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.Models
{
    public partial class Appointment
    {
        public Int32? ID { get; set; }
        public int ClinicID { get; set; }
        public int ParticipantID { get; set; }
        public int DoctorID { get; set; }
        public DateTime Date { get; set; }
        public int TimeSlot { get; set; }
        public int Status { get; set; }
        public virtual Participant Participant { get; set; }
        public virtual Doctor Doctor { get; set; }
    }

    enum AppointmentStatus {
        Created = 1,
        Notified = 2,
        Confirmed = 3,
        Completed = 4,
        Missed = 5,
        Canceled = 6
    };
}