using Collections_Generic.Data;
using Collections_Generic.Models;
using Collections_Generic.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections_Generic.Services
{
    internal class CustomerService : ICustomerService
    {
        public List<Customer> GetAll()
        {
            return AppDbContext.customers;
        }

        public List<Customer> GetByAge(int Age)
        {
            var customerByAge=AppDbContext.customers.Where(customer=>customer.Age==Age).ToList();
        }

        public Customer GetById(int? id)
        {
            if (id is null) throw new ArgumentNullException("Customer not found");
            return AppDbContext.customers.FirstOrDefault(customer => customer.Id == id);
        }

      
    }
}
