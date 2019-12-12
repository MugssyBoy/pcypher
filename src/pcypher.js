const key = require('ckey');
const crypto = require('crypto');

module.exports = {
    pcypher: password => new Promise((resolve, reject) => crypto.scrypt(password, key.SECRET_KEY, parseInt(key.KEY_LENGTH), (err, dd) => resolve(dd.toString('hex')))),
    hasher: async password => await pcypher(password),
    comparePassword: async (plainTextPassword, hashedPassword) => await hasher(plainTextPassword) === hashedPassword ? true : false
};




const { comparePassword } = require('pcypher');

(async() => {
    let comparison = await comparePassword(plainTextPassword, hashedPassword); //return boolean true or false
})