const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, imgSrc, github) {
         // Calls parent constructor 
        super(name, id, email, imgSrc)
        this.github = github
        this.title = 'Engineer';
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;

