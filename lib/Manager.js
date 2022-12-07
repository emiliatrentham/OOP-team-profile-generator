const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, imgSrc, officeNumber ) {
        // Calls parent constructor 
        super(name, id, email, imgSrc,)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
    
}

module.exports = Manager;