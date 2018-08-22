using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
<<<<<<< HEAD
=======
using Participants.API.LAB.Infrastructure;
using Participants.API.LAB.Models;
using Participants.API.LAB.ViewModels;
using System.Web;
using System.IO;
>>>>>>> master

namespace Participants.API.LAB.Controllers
{
    [Authorize]
    public class ClinicalNotesController : BaseController
    {
        [HttpPost]
        public IEnumerable<ClinicalNote> GetClinicalNotesByDay([FromBody]DateTime date)
        {
            FillDB();
            return db.ClinicalNotes.Where(cn => cn.VisitDate == date.Date)
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

        [ResponseType(typeof(void))]
        [HttpPost]
        public IHttpActionResult UpdateClinicalNote(ClinicalNote clinicalNote)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (clinicalNote.ID == 0)
                return BadRequest();

            try
            {
                clinicalNote.Participant = null;
                clinicalNote.Doctor = null;
                clinicalNote.Category = null;
                clinicalNote.VisitDate = clinicalNote.VisitDate.Date;
                clinicalNote.checkSummary();

                db.Entry(clinicalNote).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch (Exception e)
            {
                if (!ClinicalNoteExists(clinicalNote.ID))
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

        [ResponseType(typeof(ClinicalNote))]
        [HttpPost]
        public IHttpActionResult AddClinicalNote(ClinicalNote clinicalNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (clinicalNote.CategoryID < 1)
                clinicalNote.CategoryID = clinicalNote.Category.ID;
            clinicalNote.Participant = null;
            clinicalNote.Doctor = null;
            clinicalNote.Category = null;
            clinicalNote.VisitDate = clinicalNote.VisitDate.Date;
            clinicalNote.Created = DateTime.Now.Date;
            clinicalNote.checkSummary();

            db.ClinicalNotes.Add(clinicalNote);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = clinicalNote.ID }, clinicalNote);
        }

        [ResponseType(typeof(ClinicalNote))]
        [HttpPost]
        public IHttpActionResult DeleteClinicalNote([FromBody] int id)
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

        [ResponseType(typeof(void))]
        [HttpPost]
        [AllowAnonymous]
        public IHttpActionResult AddSignature()
        {
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count < 1)
            {
                return BadRequest(ModelState);
            }

            var postedFile = httpRequest.Files[0];
            string name = DateTime.Now.ToString("yyyyMMddHHmmssfff") +  "_" + Guid.NewGuid();
            string ext = Path.GetExtension(postedFile.FileName);
            string filePath = HttpContext.Current.Server.MapPath("~/TempUploads/" + name + ext);
            postedFile.SaveAs(filePath);
            
            // NOTE: To store in memory use postedFile.InputStream

            return Ok(name + ext);
        }

        [ResponseType(typeof(ClinicalNote))]
        [HttpPost]
        public IHttpActionResult ApproveSignature(ImageUploadVM imageUpload)
        {
            var fullPath = HttpContext.Current.Server.MapPath("~/TempUploads/" + imageUpload.newImage);
            if (File.Exists(fullPath))
                File.Move(fullPath, HttpContext.Current.Server.MapPath("~/Uploads/" + imageUpload.newImage));

            fullPath = HttpContext.Current.Server.MapPath("~/Uploads/" + imageUpload.oldImage);
            if (File.Exists(fullPath))
                File.Delete(fullPath);

            DirectoryInfo dirInfo = new DirectoryInfo(HttpContext.Current.Server.MapPath("~/TempUploads/"));
            DateTime now = DateTime.Now;
            foreach (FileInfo fInfo in dirInfo.GetFiles())
            {
                if(fInfo.CreationTime.AddDays(1) < now)
                    fInfo.Delete();
            }
            return Ok();
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
                    cnc.ComponentName = "Test";
                    cnc.FriendlyName = "First Clinical Note";
                    db.ClinicalNoteCategories.Add(cnc);
                    db.SaveChanges();
                }

                ClinicalNote cn = new ClinicalNote();
                cn.CategoryID = 1;
                cn.ParticipantID = 1;
                cn.DoctorID = 1;
                cn.Created = DateTime.Now.Date;
                cn.VisitDate = DateTime.Now.Date;
                cn.Summary = "This is a brief of the first note";
                cn.Data = "{\"Brief\":\"This is a brief of the first note.\", \"Comments\":\"This is suppused to be a longer text, only used as a place-holder for the first test note.\"}";

                db.ClinicalNotes.Add(cn);

                cn = new ClinicalNote();
                cn.CategoryID = 1;
                cn.ParticipantID = 2;
                cn.DoctorID = 2;
                cn.Created = DateTime.Now.Date;
                cn.VisitDate = DateTime.Now.Date;
                cn.Summary = "This is a brief of the second note";
                cn.Data = "{\"Brief\":\"This is a brief of the second note.\", \"Comments\":\"This is suppused to be a longer text, only used as a place-holder for the second test note.\"}";

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