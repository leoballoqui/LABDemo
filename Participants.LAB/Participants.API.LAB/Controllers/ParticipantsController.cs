using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Participants.API.LAB.Infrastructure;
using Participants.API.LAB.Models;

namespace Participants.API.LAB.Controllers
{
    public class ParticipantsController : ApiController
    {
        private MainDbContext db = new MainDbContext();

        // GET: api/Participants
        public IQueryable<Participant> GetParticipants()
        {
            try
            {
                FillDB();
                return db.Participants;
            }
            catch (Exception e)
            {

                throw;
            }

        }

        // GET: api/Participants/5
        [ResponseType(typeof(Participant))]
        public IHttpActionResult GetParticipant(int id)
        {
            Participant participant = db.Participants.Find(id);
            if (participant == null)
            {
                return NotFound();
            }

            return Ok(participant);
        }

        // PUT: api/Participants/5
        [ResponseType(typeof(void))]
        [HttpPost]
        public IHttpActionResult UpdateParticipant(Participant participant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!participant.ID.HasValue)
            {
                return BadRequest();
            }

            db.Entry(participant).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParticipantExists(participant.ID.Value))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Participants
        [ResponseType(typeof(Participant))]
        [HttpPost]
        public IHttpActionResult AddParticipant(Participant participant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Participants.Add(participant);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = participant.ID }, participant);
        }

        // DELETE: api/Participants/5
        [ResponseType(typeof(Participant))]
        [HttpPost]
          public IHttpActionResult DeleteParticipant([FromBody] int id)
        {
            Participant participant = db.Participants.Find(id);
            if (participant == null)
            {
                return NotFound();
            }

            db.Participants.Remove(participant);
            db.SaveChanges();

            return Ok(participant);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ParticipantExists(int id)
        {
            return db.Participants.Count(e => e.ID == id) > 0;
        }

        private void FillDB() {

            if (db.Participants.Count(e => e.FirstName == "Leandro") > 0)
                return;

            Participant p = new Participant();
            p.FirstName = "Leandro";
            p.LastName = "Gonzalez Balloqui";
            p.PhoneNumber = "7864444444";
            p.SecPhoneNumber = "7865555555";
            p.Address = "Palm Beach Gardens";
            p.EmailAddress = "leo@gonzalez.com";
            p.DOB = DateTime.Now;
            p.ClinicID = 1;
            db.Participants.Add(p);

            p = new Participant();
            p.FirstName = "Anabel";
            p.LastName = "Perez Gallardo";
            p.PhoneNumber = "7866666666";
            p.SecPhoneNumber = "7867777777";
            p.Address = "Boynton Beach";
            p.EmailAddress = "anabel@perez.com";
            p.DOB = DateTime.Now;
            p.ClinicID = 1;
            db.Participants.Add(p);

            p = new Participant();
            p.FirstName = "Abelardo";
            p.LastName = "Batista Ibarra";
            p.PhoneNumber = "3051111111";
            p.SecPhoneNumber = "3052222222";
            p.Address = "Davie";
            p.EmailAddress = "billy@cuba.com";
            p.DOB = DateTime.Now;
            p.ClinicID = 1;
            db.Participants.Add(p);

            Doctor d = new Doctor();
            d.FirstName = "Chicho";
            d.LastName = "El Cojo";
            d.PhoneNumber = "3059999999";
            d.SecPhoneNumber = "3059999998";
            d.Address = "Boca Raton";
            d.EmailAddress = "chicho@cojo.com";
            d.Suffix = "Dr.";
            d.GraduatedFrom = "UH";
            d.ClinicID = 1;
            db.Doctors.Add(d);

            d = new Doctor();
            d.FirstName = "Juana";
            d.LastName = "La Loca";
            d.PhoneNumber = "3059999999";
            d.SecPhoneNumber = "3059999998";
            d.Address = "Boca Raton";
            d.EmailAddress = "chicho@cojo.com";
            d.Suffix = "Dr.";
            d.GraduatedFrom = "FIU";
            d.ClinicID = 1;
            db.Doctors.Add(d);

            d = new Doctor();
            d.FirstName = "Gerardin";
            d.LastName = "Matasano";
            d.PhoneNumber = "3059999999";
            d.SecPhoneNumber = "3059999998";
            d.Address = "Boca Raton";
            d.EmailAddress = "gerard@md.com";
            d.Suffix = "Dr.";
            d.GraduatedFrom = "Caribe";
            d.ClinicID = 1;
            db.Doctors.Add(d);

            db.SaveChanges();
        }
    }
}