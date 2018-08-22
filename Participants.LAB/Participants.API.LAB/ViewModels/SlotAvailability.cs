namespace Participants.API.LAB.ViewModels
{
    public class SlotAvailabilityVM
    {
        public int Index { get; set; }
        public string Period { get; set; }
        public bool isAvailable { get; set; }

        public SlotAvailabilityVM()
        {
        }
    }
}