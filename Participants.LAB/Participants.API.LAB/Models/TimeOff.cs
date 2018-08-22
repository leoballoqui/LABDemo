using System;
using System.Linq;

namespace Participants.API.LAB.Models
{
    public partial class TimeOff
    {
        public int ID { get; set; }
        public int ClinicID { get; set; }
        public int DoctorID { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public int Status { get; set; }

        public int NumberOfDays
        {
            get
            {
                var dayDifference = (int)To.Subtract(From).TotalDays;
                return Enumerable
                    .Range(1, dayDifference)
                    .Select(x => From.AddDays(x))
                    .Count(x => x.DayOfWeek != DayOfWeek.Saturday && x.DayOfWeek != DayOfWeek.Sunday);
            }
        }

        public virtual Doctor Doctor { get; set; }
    }

    internal enum TimeOffStatus
    {
        Created = 1,
        Notified = 2,
        Confirmed = 3
    };
}