using Collections_Generic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections_Generic.Data
{
    internal static class AppDbContext
    {
        public static List<Customer> customers;
        static AppDbContext()
        {
            customers = new List<Customer>{
            
                new Customer {Id=1,Name="Aybeniz Ezizova",Age=20,Adress="Sebail"},
                new Customer {Id=2,Name="Elvin Aliyev",Age=25,Adress="Iceriseher"},
                new Customer {Id=3,Name="Rauf Memmmedli",Age=40,Adress="Sabuncu"},
                new Customer {Id=4,Name="Gulay Huseynova",Age=18,Adress="YeniSuraxani"},
                new Customer {Id=5,Name="Ceyhun Mirzeyev",Age=32,Adress="Yasamal"}
            
            };
        }
    }
}
