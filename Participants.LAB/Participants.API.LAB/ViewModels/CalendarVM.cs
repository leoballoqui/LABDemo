using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.ViewModels
{
    public class CalendarVM
    {
        public DateTime Date { get; set; }
        public int DoctorID { get; set; }

        public CalendarVM()
        {
        }

    }
}