## team-profile-generator


  ![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)
 ![Last Commit to Current Repo](https://img.shields.io/github/last-commit/emiliatrentham/OOP-team-profile-generator)
![Commits a month](https://img.shields.io/github/commit-activity/m/emiliatrentham/OOP-team-profile-generator)


## Description 

A Node.js command-line interface (CLI) application that takes information about employees in a software engineering team and dynamically generates an HTML file based on user input that displays a summary for each person. A unit test for every part of the application's code is included to ensure the application code is maintanable. Check out the example team-html
[`here!`](https://github.com/emiliatrentham/OOP-team-profile-generator/blob/main/dist/team.html) 

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```

## Table of Contents 
* [Photos](#screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [License](#license)
* [Socials](#questions)

## Photos
![Team Profile Rendered Output Screenshot](./Assets/project-screenshot.png)


## Installation

To generate a new team profile, install node and npm : 
 - [Download Node](https://nodejs.org/en/download/)
  - Follow [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for detailed instructions on installing node 
 
 `git clone` this repository to your local machine.

Install dependencies:

- [inquirer](https://www.npmjs.com/package/inquirer)

dev-dependencies:

- [jest](https://www.npmjs.com/package/jest)


To start the application, run `node index.js` in the command line and answer the prompts.


## Usage 
Upon initialization, the application uses the `inquirer` package to prompt the user or manager to enter the following information about the team manager: name, employee ID, email address, image source, and office number.

Subsequently, the manager's information is added and pushed to the repository, the user is then presented with a menu with options to add more team members, or to finish assembling their team. Lastly, after exiting the application, an HTML file containing the user's answers will be rendered. 

![GIF demo of team-profile-generator](/Assets/demo-GIF.gif)
![Team-profile-generator tests GIF](/Assets/tests-GIF.gif)

## Technology

Technology used to develop this app:

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)

[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://www.npmjs.com/package/jest)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://whatwg.org/)

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/TR/CSS/#css)

## License

MIT License

---

## Questions?

<img src="https://avatars.githubusercontent.com/u/38886696?s=400&u=1ab29d002cf7b80fe6af55c9677da4b90b21df6f&v=4" alt="A picture of Emilia" width="40%" />

Reach out with any questions!

GitHub: [emiliatrentham](https://github.com/emiliatrentham)



[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emilia-trentham-987a59164/)