using Praktika14.Helpers.Extentions;

namespace Praktika14
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region //int array ucun extention method yazin .Hemin method arrayin elementlerinin hasilini qaytarsin
            int[] nums = { 2, 3, 4 };
            int result = nums.MultiplyElements();

            Console.WriteLine($"Array elementlerinin hasili: {result}");
            #endregion
            #region //Console-dan email gelecek .Emailde @ isharesinin bir eded olub olmamasini yyoxlayan ve bool qayataran extention method yazin.
            Console.Write("Email daxil edin: ");
            string email = Console.ReadLine();

            bool result1 = email.SignVerification();

            if (result1) 
                Console.WriteLine("Email duzgundur (1 eded @ var).");
            else
                Console.WriteLine("Email sehvdir (@ isaresi yoxdur ya da birden coxdur).");
            #endregion
        }
    }
}
