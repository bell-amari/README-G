var inquirer = require('inquirer');
var fs = require('fs');
const { Console } = require('console');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter the usage information for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines for your project',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter the test instructions for your project',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What licence did you use?',
        name: 'licence',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'git'
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email'
    }
    
]).then(({
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    licence,
    git,
    email
}) => {
    const readmeTemp = `# ${title}

    * [Licence] ${printLicence(licence)}
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)

    # Description
    # ${description}
    
    # Installation
    # ${installation}
    
    # Usage
    # ${usage}
    
    # Contribution
    # ${contribution}
    
    # Test
    # ${test}
    
    # Questions
    # GitHub Username: ${git}
    # GitHub Profile: https://github.com/${git}
    # You can reach me at the information below
    # Email: ${email}`



    createReadMe(title, readmeTemp);
});

function createReadMe(file, data){
    const fileName = `./${file.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(fileName, data, (fail)=>{
        if(fail){
            console.log(fail)
        }
        console.log(`Your README file has been successfully generated with the file name ${fileName}`);
    })
}

function printLicence(licence){
    switch(licence){
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
        case 'GPL':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    }

}