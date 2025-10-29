using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Praktika14.Helpers.Exception
{
    public static  class ExceptionEmail
    {
        #region /Console-dan email gelecek .Emailde @ isharesinin bir eded olub olmamasini yyoxlayan EXCEPTION ILE VER.
        public static void ExceptionEmailCheck(this string email)
        {
            if (string.IsNullOrWhiteSpace(email))
                throw new ArgumentException("Email boş ola bilmez!");

            int count = 0;

            for (int i = 0; i < email.Length; i++)
            {
                if (email[i] == '@')
                    count++;
            }

            
            if (count != 1)
                throw new FormatException("Email-də @ isaresinin sayı 1 olmalıdır!");

            return true; 

        }
        #endregion

    }
}
