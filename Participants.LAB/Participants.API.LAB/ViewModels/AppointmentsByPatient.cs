namespace Participants.API.LAB.ViewModels
{
    public class AppointmentsByPatient
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public bool Future { get; set; }
        public bool Past { get; set; }

        public AppointmentsByPatient()
        {
        }
    }
}