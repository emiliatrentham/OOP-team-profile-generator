// Engineer constructor
const Engineer = require('../lib/Engineer');

// Create Engineer object
describe('Engineer', () => {
    describe('Object', () => {
        test('Create Engineer object', () => {
            const engineer = new Engineer('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'emiliatrentham');

            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // Test getGithub method
    describe('github', () => {
        test('Get engineer github answer', () => {
            const engineer = new Engineer('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'emiliatrentham');

            expect(engineer.getGitHub()).toEqual
                expect.stringContaining(engineer.github.toString());
        });
    });

    // Test getRole method
    describe('Role', () => {
        test('Get employee role', () => {
            const engineer = new Engineer('Emilia Trentham', 799, 'emiliatrentdev@gmail.com', 'emiliatrentham');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});