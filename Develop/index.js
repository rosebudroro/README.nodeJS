// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// // TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter the usage information for your project',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter the contribution guidelines for your project',
    },
    {
      type: 'input',
      name: 'testinstructions',
      message: 'Please enter the test instructions for your project',
    },
    {
      type: 'list',
      message: 'Please choose a license for your project.',
      name: 'license',
      choices: ['ISC', 'MIT', 'Mozilla Public License 2.0'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
  ])
  // TODO: Create a function to write README file
  .then((response) => {
    console.log(response) // sanity check
    const fakeMd = generateMarkdown(response)
    fs.writeFile('README.md', fakeMd, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  });

function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
