using System.Web;
using System.Web.Routing;

[assembly: PreApplicationStartMethod(typeof(TreasureHunter.RegisterHubs), "Start")]

namespace TreasureHunter
{
    public static class RegisterHubs
    {
        public static void Start()
        {       
        }
    }
}
