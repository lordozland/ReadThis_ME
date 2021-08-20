// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require("inquirer");
const markinus = require('./utils/generateMarkdown')





// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub Account',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address, please',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Repository Name',
    },
    {
        type: 'input',
        name: 'headline',
        message: 'What You Want to Say Most',
    },
    {
        type: 'input',
        name: 'real',
        message: 'Use',
    },
    {
        type: 'input',
        name: 'continuation',
        message: 'Continuations',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Contributors',
    }, 

];

// console.log(answer)



// TODO: Create a function to write README file






// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer){
    const data = JSON.stringify(answer);
    fs.writeFile("./test/README.md", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("./test/README.md"));
        }
      });
  });
}
  


// Function call to initialize app
init();





