using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

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
    }
}