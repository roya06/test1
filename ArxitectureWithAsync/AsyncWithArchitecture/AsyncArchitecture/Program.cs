using Service.Services;

//ShowMethod showMethod = new ShowMethod();
//string result = await showMethod.ShowMessage("Hello,Async World!");
//Console.WriteLine(result);

StudentService studentService = new StudentService();

await studentService.GetAllAsync();