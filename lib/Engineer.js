const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, imgSrc, github) {
         // Calls parent constructor 
        super(name, id, email, imgSrc)
        this.github = github
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
    
}

module.exports = Engineer;

