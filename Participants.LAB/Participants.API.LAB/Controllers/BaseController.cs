using Participants.API.LAB.Infrastructure;
using System.Web.Http;

namespace Participants.API.LAB.Controllers
{
    public class BaseController : ApiController
    {
        protected MainDbContext db = new MainDbContext();
    }
}