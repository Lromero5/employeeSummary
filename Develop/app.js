const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const teamMembers = [];

function starterQ (){
    inquirer.prompt([
        {
            name: "role",
            type: "list",
            choices: [
                "Intern",
                "Manager",
                "Employee",
                "Engineer",
            ],
            message: "What is your role?"
        },
    ]).then(function(answers){
        // console.log(answers);
        if (answers.role === "Intern"){
            internQ();
        }else if (answers.role === "Manager"){
            managerQ();
        }else if(answers.role === "Employee"){
            employeeQ();
        }else if(answers.role === "Engineer"){
            engineerQ();
        } else {
            return "there was a problem with your request";
        };
    })      
}

function internQ(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter your id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email: "
        },
        {
            name: "school",
            type: "input",
            message: "Enter your school: "
        },
    ]).then(function(answers){
        const newIntern = new Intern (answers.name, answers.id, answers.email, answers.school);
        // console.log(newIntern);
        teamMembers.push(newIntern)
        addmoreQ();
        // const html = `<!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        //     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        // <link rel="stylesheet" href="style.css">
        // <script src="https://kit.fontawesome.com/c502137733.js"></script>
        //     <title>intern</title>
        // </head>
        // <body>
        //     <div class="card employee-card">
        //         <div class="card-header">
        //             <h2 class="card-title">${newIntern.name}</h2>
        //             <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
        //         </div>
        //         <div class="card-body">
        //             <ul class="list-group">
        //                 <li class="list-group-item">ID: ${newIntern.id}</li>
        //                 <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
        //                 <li class="list-group-item">School:${newIntern.school}</li>
        //             </ul>
        //         </div>
        //     </div>    
        // </body>
        // </html>`
        // fs.writeFile("./templates/intern.html", html, function(err){
        //     console.log("new html file made", err);
        // })
    })
}  

function managerQ(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter your id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email: "
        },
        {
            name: "officenumber",
            type: "input",
            message: "Enter your officenumber: "
        },
    ]).then(function(answers){
        const newManager = new Manager (answers.name, answers.id, answers.email, answers.officenumber);
        // console.log(newManager);
        teamMembers.push(newManager);
        addmoreQ();
        // const html = `<!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        //     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        // <link rel="stylesheet" href="style.css">
        // <script src="https://kit.fontawesome.com/c502137733.js"></script>
        //     <title>intern</title>
        // </head>
        // <body>
        //         <div class="card employee-card">
        //         <div class="card-header">
        //             <h2 class="card-title">${newManager.name}</h2>
        //             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newManager.getRole()}</h3>
        //         </div>
        //         <div class="card-body">
        //             <ul class="list-group">
        //                 <li class="list-group-item">ID: ${newManager.id}</li>
        //                 <li class="list-group-item">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
        //                 <li class="list-group-item">Office number: ${newManager.officeNumber}</li>
        //             </ul>
        //         </div>
        //     </div>   
        // </body>
        // </html>`
        // fs.writeFile("./templates/manager.html", html, function(err){
        //     console.log("new html file made", err);
        // })
    })
}  

function employeeQ(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter your id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email: "
        },
    ]).then()(function(answers){
        const newEmployee = new Employee (answers.name, answers.id, answers.email);
        // console.log(newEmployee);
        teamMembers.push(newEmployee);
        addmoreQ();
    })
}

function engineerQ(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter your id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email: "
        },
        {
            name: "github",
            type: "input",
            message: "Enter your GitHub Username: "
        },
    ]).then()(function(answers){
        const newEngineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngineer);
        addmoreQ();
    })
}

function addmoreQ(){
    inquirer.prompt([
        {
            name: "continue",
            type: "confirm",
            message: "Would you like to add another team member?"
        },
    ]).then(function(answers){
        console.log(answers);
        if (answers.continue === true){
            starterQ();
        }else {
            renderhtml();
        }
    })      
}

function renderhtml(){
    // console.log("renderhtml ", teamMembers);
    const teamCards = [];
    
     const html = ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        <h1>team member cards </h1>
                        ${teamCards}
                    </div>
                </div>
            </div>
        </body>

        </html> `

        for (i = 0; i < teamMembers.length; i++){
            if (teamMembers[i].getRole() === 'Intern'){
                const internCard = `<div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${teamMembers[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${teamMembers[i].getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${teamMembers[i].email}</a></li>
                                <li class="list-group-item">School:${teamMembers[i].school}</li>
                            </ul>
                        </div>
                    </div> `
                teamCards.push(internCard);
            } else if (teamMembers[i].getRole() === 'Manager'){
                const managerCard = ` 
                 <div class="card employee-card">
                 <div class="card-header">
                    <h2 class="card-title">${teamMembers[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${teamMembers[i].getRole()}</h3>
                 </div>
                 <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${teamMembers[i].id} </li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                        <li class="list-group-item">Office number:${teamMembers[i].officenumber}</li>
                    </ul>
                 </div>
                 </div>   `
                 teamCards.push(managerCard);
            }else if (teamMembers[i].getRole() === 'Employee'){
                const employeeCard = ` 
                 <div class="card employee-card">
                 <div class="card-header">
                    <h2 class="card-title">${teamMembers[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${teamMembers[i].getRole()}</h3>
                 </div>
                 <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${teamMembers[i].id} </li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                    </ul>
                 </div>
                 </div> `
                 teamCards.push(employeeCard);
             }else if (teamMembers[i].getRole() === 'Engineer'){
                const engineerCard = ` 
                <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${teamMembers[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${teamMembers[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:${teamMembers[i].id} </li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${teamMembers[i].github}" target="_blank" rel="noopener noreferrer">${teamMembers[i].github}</a></li>
                    </ul>
                </div>
            </div> `
                 teamCards.push(engineerCard);
            }else {
                return err;
            }
        }

        //not sure how to write it to html 
        fs.writeFile("./templates/main.html", html, function(err){
        console.log("new html file made", "With " + err +  " errors");
        })
    
}

starterQ();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
