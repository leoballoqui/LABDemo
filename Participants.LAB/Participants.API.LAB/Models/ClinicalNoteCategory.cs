using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.Models
{
    public class ClinicalNoteCategory
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ComponentName { get; set; }
        public string FriendlyName { get; set; }
    }
}