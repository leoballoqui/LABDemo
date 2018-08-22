using System;

namespace Participants.API.LAB.ViewModels
{
    public class TimeOffVM
    {
        public int DoctorID { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }

        public TimeOffVM()
        {
        }
    }
}