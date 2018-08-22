namespace Participants.API.LAB.ViewModels
{
    public class AppointmentsVM
    {
        public string Period { get; set; }
        public int TotalCapacity { get; set; }
        public int Appointments { get; set; }

        public int Percentage
        {
            get
            {
                return (Appointments * 100) / TotalCapacity;
            }
        }

        public AppointmentsVM()
        {
        }
    }
}