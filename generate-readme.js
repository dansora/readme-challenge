const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'project',
      message: 'What is your project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project'
    },
    {
        type: 'input',
        name: 'notes',
        message: 'Please add any installation notes'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please add any contributors'
    },
    {
        type: 'input',
        name: 'testers',
        message: 'Please add testers'
    },
    {
        type: 'list',
        message: 'What type of license you use?',
        name: 'license',
        choices: ['BSD Zero Clause License', 'MIT License', 'Apache License', 'Creative Commons', 'GNU General Public License'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username'
    },
    {
        type: 'email',
        name: 'email',
        message: 'Please enter your email'
    },
    {
      type: 'confirm',
      name: 'subscribe',
      message: 'Would you like to subscribe to our newsletter?'
    }
  ];
  // function to initialize program
function init() {
    inquirer.prompt(questions)
    }
    
// data to write
// const data = require ('questions');

// function to write README file
// fs.writeToFile(questions, data, (err) => {
// if (err) {
//    console.log('Error writing to file: ', err);
// } else {
//    console.log('File written successfully!');
// }
// });

// Bard
// const fs = require('fs');

// const dataToWrite = 'This is the text to write to the file.';
// const filePath = 'path/to/your/file.txt';

// fs.writeFile(filePath, dataToWrite, (err) => {
//  if (err) {
//    console.error('Error writing to file:', err);
//  } else {
//    console.log('File written successfully!');
//  }
// });



// function call to initialize program
init();
