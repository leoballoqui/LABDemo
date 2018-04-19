using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.Models
{
    public class ClinicalNote
    {
        public int ID { get; set; }
        public int DoctorID { get; set; }
        public int PatientID { get; set; }
        //public int GroupID { get; set; }
        public int CategoryID { get; set; }
        public DateTime Created { get; set; }
        public string Data { get; set; }
        public virtual Participant Participant { get; set; }
        public virtual Doctor Doctor { get; set; }
        public virtual ClinicalNoteCategory Category { get; set; }
    }
}