using Participants.API.LAB.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace Participants.API.LAB.Controllers
{
    public class ClinicalNoteCategoriesController : BaseController
    {
        // GET: api/ClinicalNoteCategories
        public IQueryable<ClinicalNoteCategory> GetClinicalNoteCategories()
        {
            FillDB();
            return db.ClinicalNoteCategories;
        }

        // GET: api/ClinicalNoteCategories/5
        [ResponseType(typeof(ClinicalNoteCategory))]
        public IHttpActionResult GetClinicalNoteCategory(int id)
        {
            ClinicalNoteCategory clinicalNoteCategory = db.ClinicalNoteCategories.Find(id);
            if (clinicalNoteCategory == null)
            {
                return NotFound();
            }

            return Ok(clinicalNoteCategory);
        }

        // PUT: api/ClinicalNoteCategories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClinicalNoteCategory(int id, ClinicalNoteCategory clinicalNoteCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != clinicalNoteCategory.ID)
            {
                return BadRequest();
            }

            db.Entry(clinicalNoteCategory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicalNoteCategoryExists(id))
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

        // POST: api/ClinicalNoteCategories
        [ResponseType(typeof(ClinicalNoteCategory))]
        public IHttpActionResult PostClinicalNoteCategory(ClinicalNoteCategory clinicalNoteCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ClinicalNoteCategories.Add(clinicalNoteCategory);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = clinicalNoteCategory.ID }, clinicalNoteCategory);
        }

        // DELETE: api/ClinicalNoteCategories/5
        [ResponseType(typeof(ClinicalNoteCategory))]
        public IHttpActionResult DeleteClinicalNoteCategory(int id)
        {
            ClinicalNoteCategory clinicalNoteCategory = db.ClinicalNoteCategories.Find(id);
            if (clinicalNoteCategory == null)
            {
                return NotFound();
            }

            db.ClinicalNoteCategories.Remove(clinicalNoteCategory);
            db.SaveChanges();

            return Ok(clinicalNoteCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ClinicalNoteCategoryExists(int id)
        {
            return db.ClinicalNoteCategories.Count(e => e.ID == id) > 0;
        }

        private void FillDB()
        {
            if (db.ClinicalNoteCategories.Count(e => e.Name == "Cat1") > 0)
                return;

            ClinicalNoteCategory cnc = new ClinicalNoteCategory();
            cnc.Name = "Cat1";
            cnc.ComponentName = "ClinicalNoteTest";
            cnc.FriendlyName = "First Clinical Note";

            db.ClinicalNoteCategories.Add(cnc);
            db.SaveChanges();
        }
    }
}