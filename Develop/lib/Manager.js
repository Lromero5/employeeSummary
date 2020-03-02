// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

//test
// const jr = new Manager ('Jr', 76, 'eddie@gmail.com', 'office number ' + 56);
//   console.log(jr.getRole())




  module.exports = Manager;
