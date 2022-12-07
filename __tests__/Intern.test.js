// Intern constructor
const Intern = require('../lib/Intern');

// Create Intern object
describe('Intern', () => {
    describe('Object', () => {
        test('Create Intern object', () => {
            const intern = new Intern('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'UW');

            expect(intern.school).toEqual(expect.any(String));
        });
    });

    // Test getSchool method
    describe('school', () => {
        test('Get employee school', () => {
            const intern = new Intern('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'UW');

            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    // Test getRole method
    describe('Role', () => {
        test('Get employee role', () => {
            const intern = new Intern('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'UW');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});