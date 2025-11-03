using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace praktika15.Models.Helpers
{
    public delegate bool Notification(string message);
    internal class Notify
    {
        public bool SendNotification(string message)
        {
            Console.WriteLine("Notification: "+message);
            return true;

        }

        public bool EmailNotification(string message)
        {
            Console.WriteLine("Notification: " + message);
            return false;
        }

    }
}
