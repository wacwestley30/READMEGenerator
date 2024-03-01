// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of license for user input found on githubs page when creating a new repo and then cross referencing to opensource.org's short identifier for each license
const licenseList = [
    'Apache-2.0',
    'GPL-3.0-only',
    'MIT',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'BSL-1.0',
    'EPL-2.0',
    'AGPL-3.0-only',
    'GPL-2.0',
    'LGPL-2.1',
    'MPL-2.0',
    'Unlicense',
    ''
]

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project. Such as what was your motivation, why did you build this project or what did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install and run your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for using your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: licenseList
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your project.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
];

// function to actually write the file and check for any errors during creation
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    )
}

// function to initialize app and catch any errors
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownAnswers = generateMarkdown(answers);
            writeToFile('README.md', markdownAnswers);
        })
        .catch((error) => {
            console.error('Error initializing:', error)
        });
}

// Function call to initialize the app
init();
