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
    }
    
]).then(({
    title,
    description,
    installation,
    usage,
    contribution,
    test
}) => {
    const readmeTemp = `# ${title}

    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contribution](#contribution)
    [Test](#test)

    # Description
    # ${description}
    # Installation
    # ${installation}
    # Usage
    # ${usage}
    # Contribution
    # ${contribution}
    # Test
    # ${test}`

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