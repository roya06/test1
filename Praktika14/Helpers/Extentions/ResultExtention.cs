using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Praktika14.Helpers.Extentions
{
    
    public static class ResultExtention
    {
        #region //int array ucun extention method yazin .Hemin method arrayin elementlerinin hasilini qaytarsin
        public static int MultiplyElements(this int[] numbers)
        {
            int result = 1;
            foreach (var item in numbers)
            {
                result *= item;
            }
            return result;

        }
        #endregion
        #region //Console-dan email gelecek .Emailde @ isharesinin bir eded olub olmamasini yyoxlayan ve bool qayataran extention method yazin.
        
        public static bool SignVerification(this string email)
        {
            int count = 0;

            foreach (char c in email)
            {
                if (c == '@')
                    count++;
            }

            return count == 1;
        }
        #endregion
    }
}
