using System;

namespace Participants.API.LAB.Models
{
    public class ClinicalNote
    {
        public int ID { get; set; }
        public int DoctorID { get; set; }
        public int ParticipantID { get; set; }

        //public int GroupID { get; set; }
        public int CategoryID { get; set; }

        public DateTime Created { get; set; }
        public DateTime VisitDate { get; set; }
        public string Summary { get; set; }
        public string Data { get; set; }
        public virtual Participant Participant { get; set; }
        public virtual Doctor Doctor { get; set; }
        public virtual ClinicalNoteCategory Category { get; set; }

        public void checkSummary()
        {
            if (!String.IsNullOrEmpty(Summary) && Summary.Length > 30)
                Summary = Summary.Substring(0, 27) + "...";
        }
    }
}