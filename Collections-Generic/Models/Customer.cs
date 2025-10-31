using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections_Generic.Models
{
    internal  class Customer:BaseEntitiy
    {
        public string Name { get; set; }
        public  int Age { get; set; }
        public string Adress { get; set; }
        
    }
}
