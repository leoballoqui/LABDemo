using System;
using System.Collections.Generic;

namespace Participants.API.LAB.ViewModels
{
    public class AvailabilityVM
    {
        public int DoctorID { get; set; }
        public DateTime Date { get; set; }
        public List<SlotAvailabilityVM> SlotsAvailability { get; set; }

        public AvailabilityVM()
        {
            SlotsAvailability = new List<SlotAvailabilityVM>();
        }
    }
}