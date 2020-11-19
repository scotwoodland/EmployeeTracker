// Setup variables for the README 
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Setup questions to be asked in node by putting everything into a single array
const userQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your webpage name?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your webpage."
    },
    {
        type: "input",
        name: "installation",
        message: "Describe your installation process for this webpage."
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your webpage?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the licensing you would like to use for your application.",
        choices: [
            "MIT",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like other users to contribute?  If so, explain how."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests for users here, to demo the project and its use."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail??"
    },
    {
        type: "input",
        name: "thumbnail",
        message: "What is the path for your thumbnail?"
    },
]
//Function that writes the readme file.
inquirer.prompt(userQuestions)
    .then(function (data) {

        var filename = data.name.toLowerCase().split(' ').join('') + ".md";

        fs.writeFile(filename, generateMarkdown(data), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Read me generator successfull!");

            console.log("README file is called: " + filename);

        });
    });;




