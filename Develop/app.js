const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

//empty arrays to catch the information the user will input about the manager and the team members. 
const teamManager = [];
const teamMembers = [];

//managerQ will be the fist function to execute.
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
            name: "officeNumber",
            type: "input",
            message: "Enter your officenumber: "
        },
    ]).then(function(answers){
        //new manager is created and pushed into the empty array on top
        const newManager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        teamManager.push(newManager);
        starterQ();
    })
}  

//starterQ will execute once the user has inputted the manager information. 
function starterQ (){
    inquirer.prompt([
        {
            name: "role",
            type: "list",
            choices: [
                "Intern",
                "Engineer",
            ],
            message: "What role would you like to add?"
        },
    ]).then(function(answers){
//depending on what role is choosen, differnt questions will run
        if (answers.role === "Intern"){
            internQ();
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
            message: "Enter name of intern: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter intern id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter email: "
        },
        {
            name: "school",
            type: "input",
            message: "Enter school: "
        },
    ]).then(function(answers){
        const newIntern = new Intern (answers.name, answers.id, answers.email, answers.school);
        // console.log(newIntern);
        teamMembers.push(newIntern)
        addmoreQ();
    })
}  


function engineerQ(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter name of engineer: "
        },
        {
            name: "id",
            type: "input",
            message: "Enter id: "
        },
        {
            name: "email",
            type: "input",
            message: "Enter email: "
        },
        {
            name: "github",
            type: "input",
            message: "Enter GitHub Username: "
        },
    ]).then(function(answers){
        const newEngineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngineer);
        addmoreQ();
    })
}

//addmoreQ will allow the manager to add more team members
function addmoreQ(){
    inquirer.prompt([
        {
            name: "continue",
            type: "confirm",
            message: "Would you like to add another team member?"
        },
    ]).then(function(answers){
        if (answers.continue === true){
            starterQ();
        }else {
            renderhtml();
        }
    })      
}

//once all team members have been created the renderhtml() function will be called
function renderhtml(){
    //html for manager card
    const managerCard = ` 
    <div class="card employee-card">
    <div class="card-header">
       <h2 class="card-title">${teamManager[0].name}</h2>
       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Role: ${teamManager[0].getRole()}</h3>
    </div>
    <div class="card-body">
       <ul class="list-group">
           <li class="list-group-item">ID: ${teamManager[0].id} </li>
           <li class="list-group-item">Email: <a href="mailto:${teamManager[0].email}">${teamManager[0].email}</a></li>
           <li class="list-group-item">Office number: ${teamManager[0].officeNumber} </li>
       </ul>
    </div>
    </div>`
    
    //empty array that will catch all of the intern and engineer cards that will be made through our for loop.
    const teamCards = [];

        for (i = 0; i < teamMembers.length; i++){
            if (teamMembers[i].getRole() === 'Intern'){
                const internCard = `
                    <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${teamMembers[i].name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${teamMembers[i].getRole()}</h3>
                    </div>
                      <div class="card-body">
                         <ul class="list-group">
                             <li class="list-group-item">ID: ${teamMembers[i].id}</li>
                             <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></li>
                             <li class="list-group-item">School:${teamMembers[i].school}</li>
                        </ul>
                      </div>
                    </div> `
                teamCards.push(internCard);
            } 
            else if (teamMembers[i].getRole() === 'Engineer'){
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
            }
            else {
                return err;
            }
        }

        //this variable is creating the head and body of our html file and will dynamicall add cards that are pushed through the for loop above.
        const html = ` 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
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
                     ${managerCard}
                     ${teamCards} 
                    </div>

                </div>
            </div>
        </body>
        </html> `

        // this will create a file named team.html and insert our html
        fs.writeFile("./team.html", html, function(err){
        console.log("new html file made", "With " + err +  " errors");
        })
    
}


//calls the first functions
managerQ();

