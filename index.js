// ***external packages
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

// ***internal packages
const generator = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Give your project a Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a 1 or 2 sentence description.',
        name: 'description'
    },
    {
        type: 'checkbox',
        message: 'What should be included in your Table of Contents?',
        name: 'toc',
        choices: [
            { name: 'Installation' },
            { name: 'Usage' },
            { name: 'Licence' },
            { name: 'Contributing' },
            { name: 'Tests' },
            { name: 'Questions' }
        ],
        validate: function (answer) {
            if (answer.length < 2) {
                return 'You must choose at least 2 headings for the TOC.';
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Instructions:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Location of screenshot:',
        name: 'screenshot'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats, your README.md has been generated");
    })
}

// const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        .then(function (response) {
            console.log(generator(response))
        })
}

// function call to initialize program
init();
