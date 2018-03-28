using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Participants.API.LAB.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Angular Home Page";

            return View("NgApp");
        }

        [Route("ngapp")]
        public ActionResult NgApp()
        {
            ViewBag.Title = "Angular Home Page";

            return View("NgApp");
        }
    }
}
