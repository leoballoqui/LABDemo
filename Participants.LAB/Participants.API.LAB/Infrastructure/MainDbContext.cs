using Participants.API.LAB.Models;
using System.Data.Entity;

namespace Participants.API.LAB.Infrastructure
{
    public partial class MainDbContext : DbContext
    {
        public MainDbContext()
            : base("name=DefaultConnection")
        {
            base.Configuration.LazyLoadingEnabled = false;
        }

        public MainDbContext(string connectionString)
            : base(connectionString)
        {
            base.Configuration.LazyLoadingEnabled = false;
        }

        public virtual DbSet<Participant> Participants { get; set; }

        public virtual DbSet<Doctor> Doctors { get; set; }

        public virtual DbSet<Appointment> Appointments { get; set; }

        public DbSet<ClinicalNoteCategory> ClinicalNoteCategories { get; set; }

        public DbSet<ClinicalNote> ClinicalNotes { get; set; }

        public System.Data.Entity.DbSet<Participants.API.LAB.Models.TimeOff> TimeOffs { get; set; }
    }
}