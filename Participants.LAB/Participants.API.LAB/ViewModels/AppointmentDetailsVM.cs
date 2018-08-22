using System;

namespace Participants.API.LAB.ViewModels
{
    public class AppointmentDetailsVM
    {
        public int AppointmentID { get; set; }
        public DateTime Date { get; set; }
        public int Slot { get; set; }
        public string Period { get; set; }
        public int Status { get; set; }
        public string StatusName { get; set; }
        public int DoctorID { get; set; }
        public int ParticipantID { get; set; }
        public string DoctorName { get; set; }
        public string ParticipantName { get; set; }
        public string ParticipantContactInfo { get; set; }

        public AppointmentDetailsVM()
        {
        }
    }
}