using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Participants.API.LAB.Startup))]

namespace Participants.API.LAB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}