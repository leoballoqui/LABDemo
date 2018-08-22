using Participants.API.LAB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.ViewModels
{
    public class ImageUploadVM
    {
        public string oldImage { get; set; }
        public string newImage { get; set; }

        public ImageUploadVM()
        {
        }

    }
}