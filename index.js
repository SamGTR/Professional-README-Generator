// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project:',

        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the constribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the tests for your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username:',

        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email ID:',

        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a email ID.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Please select a license for your project:',
        name: 'license',
        choices: ['MIT', 'BSD', 'Apache', 'GPL'],
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.error(err) : console.log('Successfully created README.md!')
    );
    
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>
            writeToFile('README.md', data))
        .catch((err) => console.error(err)); 
}

// Function call to initialize app
init();
