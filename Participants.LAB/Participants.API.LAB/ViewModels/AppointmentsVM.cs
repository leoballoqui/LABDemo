using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.ViewModels
{
    public class AppointmentVM
    {
        public string Period { get; set; }
        public int TotalCapacity { get; set; }
        public int Appointments { get; set; }
        public int Percentage {
            get {
                return (Appointments * 100) / TotalCapacity;
            }
        }


        public AppointmentVM()
        {
        }


    }
}