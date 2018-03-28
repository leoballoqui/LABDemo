using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.Models
{
    public partial class Doctor
    {
        public Int32? ID { get; set; }
        public int ClinicID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Suffix { get; set; }
        public string PhoneNumber { get; set; }
        public string SecPhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string GraduatedFrom { get; set; }
        public string FullName {
            get {
                return Suffix + " " + FirstName + " " + LastName; 
            }
        }
        public List<Appointment> Appointments { get; set; }
    }
}