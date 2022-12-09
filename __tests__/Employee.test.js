// Employee constructor
const Employee = require('../lib/Employee');

// Create Employee object
describe('Employee', () => {
    describe('Object', () => {
        test('Create employee object', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
            expect(employee.imgSrc).toEqual(expect.any(String));
        });
    });

    // Test getName method
    describe('Name', () => {
        test('Get employee name', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    // Test getID method
    describe('ID', () => {
        test('Get employee ID', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    // Test getEmail method
    describe('Email', () => {
        test('Gets employee email', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    // Test getImgSrc method
      describe('imgSrc', () => {
        test('Gets employee imgSrc', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.getImgSrc()).toEqual(expect.stringContaining(employee.imgSrc.toString()));
        });
    });

    // Test getRole method
    describe('Role', () => {
        test('Get employee role', () => {
            const employee = new Employee('', 1, '', '');
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});