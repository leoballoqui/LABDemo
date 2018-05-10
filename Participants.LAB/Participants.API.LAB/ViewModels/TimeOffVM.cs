using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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