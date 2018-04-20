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
using Participants.API.LAB.ViewModels;

namespace Participants.API.LAB.Controllers
{
    [Authorize]
    public class ClinicalNotesController : ApiController
    {
        private MainDbContext db = new MainDbContext();

        [HttpPost]
        public IEnumerable<ClinicalNote> GetClinicalNotesByDay([FromBody]DateTime date)
        {
            FillDB();
            return db.ClinicalNotes.Where(cn => cn.Created == date.Date)
                .Include("Category").Include("Doctor").Include("Participant").ToList();
        }

        // GET: api/ClinicalNotes
        public IQueryable<ClinicalNote> GetClinicalNotes()
        {
            FillDB();
            return db.ClinicalNotes;
        }

        // GET: api/ClinicalNotes/5
        [ResponseType(typeof(ClinicalNote))]
        public IHttpActionResult GetClinicalNote(int id)
        {
            ClinicalNote clinicalNote = db.ClinicalNotes.Find(id);
            if (clinicalNote == null)
            {
                return NotFound();
            }

            return Ok(clinicalNote);
        }

        // PUT: api/ClinicalNotes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClinicalNote(int id, ClinicalNote clinicalNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != clinicalNote.ID)
            {
                return BadRequest();
            }

            db.Entry(clinicalNote).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicalNoteExists(id))
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

        // POST: api/ClinicalNotes
        [ResponseType(typeof(ClinicalNote))]
        public IHttpActionResult PostClinicalNote(ClinicalNote clinicalNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ClinicalNotes.Add(clinicalNote);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = clinicalNote.ID }, clinicalNote);
        }

        // DELETE: api/ClinicalNotes/5
        [ResponseType(typeof(ClinicalNote))]
        public IHttpActionResult DeleteClinicalNote(int id)
        {
            ClinicalNote clinicalNote = db.ClinicalNotes.Find(id);
            if (clinicalNote == null)
            {
                return NotFound();
            }

            db.ClinicalNotes.Remove(clinicalNote);
            db.SaveChanges();

            return Ok(clinicalNote);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClinicalNoteExists(int id)
        {
            return db.ClinicalNotes.Count(e => e.ID == id) > 0;
        }

        private void FillDB()
        {
            try
            {
                if (db.ClinicalNotes.Count() > 0)
                    return;

                if (db.ClinicalNoteCategories.Count() <= 0)
                {

                    ClinicalNoteCategory cnc = new ClinicalNoteCategory();
                    cnc.Name = "Cat1";
                    cnc.ComponentName = "ClinicalNoteTest";
                    cnc.FriendlyName = "First Clinical Note";
                    db.ClinicalNoteCategories.Add(cnc);
                    db.SaveChanges();
                }

                ClinicalNote cn = new ClinicalNote();
                cn.CategoryID = 1;
                cn.ParticipantID = 1;
                cn.DoctorID = 1;
                cn.Created = DateTime.Now.Date;
                cn.Data = "{}";

                db.ClinicalNotes.Add(cn);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }



        }
    }
}