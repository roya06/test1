using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace praktika15.Models.Helpers
{
    #region 1
    public delegate bool Find(int number);

    internal class EvenAndPozitive
    {
        int[] numbers = { 1, 4, 6, 3, 9, 45, 23 };

        public bool IsEven(int number)
        {
            return number % 2 == 0;
        }
        public bool Pozitive (int number)
        {
            return number > 0;
        }
      
    }
    #endregion

}
