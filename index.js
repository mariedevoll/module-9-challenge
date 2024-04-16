// TODO: Include packages needed for this application
const package = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },{
        type: "input",
        name: "email",
        message: "What is your email?"
    }, {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    }, {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    }, {
        type: "list",
        name: "license",
        message: "What type of license should your project have?",
        choices: ["MIT", "APACHE", "GPL", "None"]
    }, {
        type: "input",
        name: "motivation",
        message: "What was your motivation to build this project?"
    }, {
        type: "input",
        name: "issues",
        message: "What issues did you have while making your project?"
    }, {
        type: "confirm",
        name: "enjoyment",
        message: "Did you enjoy making this project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
