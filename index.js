var inquirer = require("inquirer");

var generator = require("./utils/generateMarkdown.js")

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your user name?",
//       name: "username"
//     },

// array of questions for user
const questions = [{ type: "input", message: 'what is the title?', name: 'title' },
{ type: "input", message: 'question 2?', name: 'answer2' }

];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

    inquirer
        .prompt(questions)
        // console.log(generator({ title: 'whatever' }))
        .then(function (response) {
            console.log(generator(response))
        })
}

// function call to initialize program
init();

// console.log('hello world')