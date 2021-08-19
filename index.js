// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require("inquirer");
const markinus = require('./utils/generateMarkdown')

// inquirer.prompt([
//     {
//         name: 'greeting',
//         message: 'What would you like to say?',
//         type: 'input'
//        }])
//   .then(function(answer){
//     console.log(answer);
//   });

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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
