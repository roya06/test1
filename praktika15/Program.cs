using praktika15.Models.Helpers;
#region 1
EvenAndPozitive evenAndPozitive =new EvenAndPozitive();
Find findeven = new Find(evenAndPozitive.IsEven);
Find findPozitiv = new Find(evenAndPozitive.Pozitive);

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, -4, -5, -6, 8, 9, 10 };
Console.WriteLine("Even Numbers");
foreach (var number in numbers)
{
    if (findeven(number))
    {
        Console.WriteLine(number);
    }
}
Console.WriteLine("Pozitive numbers:");
foreach (var number in numbers)
{
    if (findPozitiv(number))
    {
        Console.WriteLine(number);
    }
}
#endregion
Notify notify = new Notify();
Notification not1 = new Notification(notify.SendNotification);
//Notification not2=new Notification(notify.EmailNotification);
not1 += notify.EmailNotification;
//not2 += not1;

bool result=not1("Hello,this is a test notification");
Console.WriteLine(result);
