using Domain.NewFolder;

namespace Data.DB
{
    public static class Context
    {
        static Student[] students =new Student[0];
        static Student student1 =new Student 
        //Student student = new Student()
        {
            FullName = "Kenan Rzayev",
            Age = 21
        };
        static Student student2 = new Student
        {
            FullName = "Orxan Mirzeyev",
            Age = 22
        };
        public static void StudentInfo()
        {
            students = new Student[] { student1, student2 };
            foreach (var student in students)
            {
                Console.WriteLine($"Name: {student.FullName},Age: {student.Age}");
            }
        }
    }
}
