using Praktika14.Helpers.Extentions;

#region //int array ucun extention method yazin .Hemin method arrayin elementlerinin hasilini qaytarsin
int[] nums = { 2, 3, 4 };
int result = nums.MultiplyElements();

Console.WriteLine($"Array elementlerinin hasili: {result}");
#endregion
#region //Console-dan email gelecek .Emailde @ isharesinin bir eded olub olmamasini yyoxlayan ve bool qayataran extention method yazin.
Console.Write("Email daxil edin: ");
string emaill = Console.ReadLine();

bool result1 = emaill.SignVerification();

if (result1)
    Console.WriteLine("Email duzgundur (1 eded @ var).");
else
    Console.WriteLine("Email sehvdir (@ isaresi yoxdur ya da birden coxdur).");
#endregion
try
{
    while (true)
    {
        string email = Console.ReadLine();
        bool isValid = email.IsValidEmail();
        Console.WriteLine("Email Duzdur: {isValid}");

    }

catch (ArgumentException ex)
{
    Console.WriteLine($" Xeta: {ex.Message}");
}
