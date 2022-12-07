// Employee constructor
const Employee = require('../lib/Employee');

// Create Employee object
describe('Employee', () => {
    describe('Object', () => {
        test('Create employee object', () => {
            const employee = new Employee('Emilia Trentham', 799, 'emiliatrentdev.gmail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    // Test getName method
    describe('Name', () => {
        test('Get employee name', () => {
            const employee = new Employee('Emilia Trentham', 799, 'emiliatrentdev.gmail.com');

            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    // Test getID method
    describe('ID', () => {
        test('Get employee ID', () => {
            const employee = new Employee('Emilia Trentham', 799, 'emiliatrentdev.gmail.com');

            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    // Test getEmail method
    describe('Email', () => {
        test('Gets employee email', () => {
            const employee = new Employee('Emilia Trentham', 799, 'emiliatrentdev.gmail.com');

            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    // Test getRole method
    describe('Role', () => {
        test('Get employee role', () => {
            const employee = new Employee('Emilia Trentham', 799, 'emiliatrentdev.gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});