using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class CiudadesController : Controller
    {
        //
        // GET: /Ciudades/

        public ActionResult Index(string id)
        {
            if(String.IsNullOrWhiteSpace(id))
                return View("CiudadesView");
            else
                return View("CiudadView");
        }

    }
}
