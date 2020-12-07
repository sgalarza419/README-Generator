const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// ask for user input
const promptUser = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the project title of your README file?',
        name: 'title',
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
    }]).then(function (response) {
        console.log(response);
        let README = generateREADME(response);

        writeFileAsync('README.md', README).then(
            err => console.log('success!')
        );
    })
}
promptUser();

// using input generation .md file in string format
function generateREADME(response) {
    let READMEString = `
# ${response.title}

## Description 

${response.description}
![badmath](https://img.shields.io/badge/-${response.license}-yellow/)

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.installation}

## Usage 

${response.usage}

## Credits

${response.contributors}

## License

${response.license}

## Contributing

${response.contributors}

## Tests

${response.tests}

## Questions

You can find other projects that I have worked on at https://github.com/${response.gitHub}.
If there are any questions you may have please contact me at ${response.email}.  

---
© 2020 Steven Galarza . All Rights Reserved.
`

    return READMEString;
}