﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class ModelosController : Controller
    {
        //
        // GET: /Modelos/

        public ActionResult Index(string id)
        {
            if (String.IsNullOrWhiteSpace(id))
                return HttpNotFound();
            else
                return View("ModeloView");
        }

    }
}
