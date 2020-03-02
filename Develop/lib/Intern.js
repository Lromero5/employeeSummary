// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

// const Tom = new Intern ('Tom', 23, 'tom@gmail.com', 'lromero5');
//   console.log(Tom)
  
module.exports = Intern;