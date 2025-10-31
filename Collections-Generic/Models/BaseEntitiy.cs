using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections_Generic.Models
{
    internal abstract class BaseEntitiy
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }=DateTime.Now;
    }
}
