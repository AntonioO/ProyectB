using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("page_home");
        }

        public ActionResult brasa()
        {
            return View("page_home");
        }
    }
}
