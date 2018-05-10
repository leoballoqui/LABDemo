using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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