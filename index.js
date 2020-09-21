// ***external packages
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

// ***internal packages
const generator = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Author Name:',
        name: 'author',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("An Author Name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'user',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'GitHub Repo:',
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Give your project a Title:',
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Write a 1 or 2 sentence description.',
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required.");
            }
            return true;
        }
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
        name: 'screenshot',
        default: 'assets/LandingPage.png'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'Email address for future contact:',
        name: 'email',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
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
