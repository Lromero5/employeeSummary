// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getname(){
        return this.name

    };

    getId(){
        return this.id
    };  

    getEmail(){
        return this.email
    };

    getRole(){
        return 'Employee';
    };

  }

  //Testing 
  //output Employee { name: 'Eddie', id: 76, email: 'eddie@gmail.com' }
//   const Eddie = new Employee ('Eddie', 76, 'eddie@gmail.com')
//   console.log(Eddie)
  
  
  module.exports = Employee;

