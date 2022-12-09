// Manager constructor
const Manager = require('../lib/Manager');

// Create Manager object
describe('Manager', () => {
    describe('Object', () => {
        test('Create Manager object', () => {
            const manager = new Manager('', 3, '', '', 3);
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    // Test getRole method
    describe('Role', () => {
        test('gets role of employee', () => {
            const manager = new Manager('', 3, '', '');
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});