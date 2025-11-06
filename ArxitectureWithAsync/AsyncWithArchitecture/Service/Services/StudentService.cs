using Data.DB;
using Domain.NewFolder;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class StudentService : IStudentService
    {
        //Context context = new Context();
        public async Task GetAllAsync()
        {
            Context.StudentInfo();
        }

    }
}
