// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: 'greeting',
        message: 'What would you like to say?',
        type: 'input'
       }])
  .then(function(answer){
    console.log(answer);
  });

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
