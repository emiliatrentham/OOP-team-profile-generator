class Employee {
    constructor(name, id, email, imgSrc) {
        this.name = name;
        this.id = id,
        this.email = email;
        this.imgSrc = imgSrc;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getImgSrc() {
        return this.imgSrc;
    }

    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;