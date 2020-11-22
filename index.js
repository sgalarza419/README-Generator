const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// ask for user input
const promptUser = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the project title of your README file?',
        name: 'project Title',
    }, {
        type: 'input',
        message: 'Please give a discription of your project.',
        name: 'description',
    }, {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    }, {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage',
    }, {
        type: 'input',
        message: 'Who where the contributors to the project?',
        name: 'contributors',
    }, {
        type: 'input',
        message: 'How would you run tests on your project?',
        name: 'tests',
    }, {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    }, {
        type: 'list',
        message: 'What are the licenses are used?',
        choices: ['MIT', 'Apache', 'GNU GPLv3', ],
        name: 'license',
    }, {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }])
}