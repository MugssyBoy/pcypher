const { hasher } = require('../index');
const assert = require('assert');

//describe a test
describe('Hashing passwords', function(done) {
    //create tests
    it('Converts a password', function() {
        const plainTextPassword = 'This is a test password';
        const password = hasher(plainTextPassword)
            .then(function(result) {
                assert(result) === true ? done(): console.log('test failed');
            })
    })
})