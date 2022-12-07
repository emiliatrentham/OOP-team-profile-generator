const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, imgSrc, school) {
        // Calls parent constructor 
        super(name, id, email, imgSrc)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
    
}

module.exports = Intern;
