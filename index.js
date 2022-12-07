// Import npm packages
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Output directory
const OUTPUT_DIR = path.resolve(__dirname, "dist")

// Output file path and name
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Import HTML template
const generateSite = require('./src/generate-site.js');

// Create an empty array of team members
const teamMembers = [];


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imgSrc',
            message: 'What is the team manager\'s imgSrc?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.imgSrc, answers.officeNumber);
        teamMembers.push(manager);
        addTeamMember();
    })
};

const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select an option to continue:',
            choices: ['Add an engineer', 'Add an intern', 'Assemble team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add an engineer":
                    promptEngineer();
                    break;
                case "Add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    Add a New Engineer:
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the engineer\'s employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imgSrc',
            message: 'What is the Engineer\'s img Src?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s Github username. (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a valid Github username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.imgSrc, answers.github);
        teamMembers.push(engineer);
        addTeamMember();
    })
};

const promptIntern = () => {
    console.log(`
    Add a New Intern:
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the intern\'s employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imgSrc',
            message: 'What is the Intern\'s img Src?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school name. (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.imgSrc, answers.school);
        teamMembers.push(intern);
        addTeamMember();
    })
};

const buildTeam = () => {
    console.log(`
 
    All done! Check out the HTML file created in the "dist" folder.'

    `);

    // Create output directory if output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();