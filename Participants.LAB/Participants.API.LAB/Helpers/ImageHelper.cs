using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;

namespace Participants.API.LAB.Helpers
{
    public class ImageHelper
    {

        public bool EncodeAndResize(string fullPath, long max, long  divider, ImageFormat imageFormat)
        {
            try
            {
                if (!FileExist(fullPath))
                    return false;
                long length = FileLength(fullPath);
                long percent = (length > max) ? divider / length : 100;
                
                ImageCodecInfo jgpEncoder = GetEncoder(imageFormat);
                System.Drawing.Imaging.Encoder myEncoder = System.Drawing.Imaging.Encoder.Quality;
                EncoderParameters myEncoderParameters = new EncoderParameters(1);
                EncoderParameter myEncoderParameter = new EncoderParameter(myEncoder, percent);
                myEncoderParameters.Param[0] = myEncoderParameter;

                using (Bitmap bmp = new Bitmap(fullPath))
                {
                    bmp.Save(fullPath + "_temp", jgpEncoder, myEncoderParameters);
                }
                File.Delete(fullPath);
                File.Move(fullPath + "_temp", fullPath);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public long FileLength(string fullPath)
        {
            return new FileInfo(fullPath).Length;
        }

        public bool FileExist(string fullPath)
        {
            return File.Exists(fullPath);
        }

        public bool MoveFile(string fullPath, string newPath)
        {
            try
            {
                File.Move(fullPath, newPath);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool DeleteFile(string fullPath)
        {
            try
            {
                if(FileExist(fullPath))
                    File.Delete(fullPath);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool MaintainFolder(string folderPath, int daysOld)
        {
            try
            {
                DirectoryInfo dirInfo = new DirectoryInfo(folderPath);

                DateTime now = DateTime.Now;
                foreach (FileInfo fInfo in dirInfo.GetFiles())
                {
                    if (fInfo.CreationTime.AddDays(daysOld) < now)
                        fInfo.Delete();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }

        private ImageCodecInfo GetEncoder(ImageFormat format)
        {
            ImageCodecInfo[] codecs = ImageCodecInfo.GetImageDecoders();
            foreach (ImageCodecInfo codec in codecs)
            {
                if (codec.FormatID == format.Guid)
                    return codec;
            }
            return null;
        }
    }
}