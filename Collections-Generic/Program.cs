

using Collections_Generic.Models;
using Collections_Generic.Services;     
CustomerService customerService = new CustomerService();
var customers = customerService.GetAll();
foreach (var customer in customers)
{
Console.WriteLine($"Id:{customer.Id},Name:{customer.Name},Age:{customer.Age},Adress:{customer.Adress}"+ $"CreatedDate:{customer.CreatedDate}");
}

Console.WriteLine("================================");
try
{
    var Customer = customerService.GetById(3);
    if (Customer is null)
    {
        Console.WriteLine("Customer is not found");
        return;
    }
    Console.WriteLine($"Id:{customer.Id},Name:{customer.Name},Age:{customer.Age},Adress:{customer.Adress}" + $"CreatedDate:{customer.CreatedDate}");
}
catch(Exception ex)
{
    Console.WriteLine($"Error:{ex.Message}");
}
try
{
    // Retrieve customers older than 25 years and display their information
    var customers = customerService.GetByAge(25);
    if (customers == null || !customers.Any())
    {
        Console.WriteLine("No customers found above the age of 25.");
        return;
    }

    foreach (var customer in customers)
    {
        Console.WriteLine($"Id:{customer.Id}, Name:{customer.Name}, Age:{customer.Age}, Address:{customer.Adress}, CreatedDate:{customer.CreatedDate}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}