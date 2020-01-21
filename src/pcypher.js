const key = require('ckey');
const crypto = require('crypto');

const encrypt = password => new Promise((resolve, reject) => crypto.scrypt(password, key.SECRET_KEY, parseInt(key.KEY_LENGTH), (err, dd) => resolve(dd.toString('hex'))));

const hasher =  async password => await encrypt(password);
const comparePassword = async (plainTextPassword, hashedPassword) => await hasher(plainTextPassword) === hashedPassword ? true : false;
const generateToken = async () => await crypto.randomBytes(parseInt(key.KEY_LENGTH)).toString('hex');

module.exports = {
    hasher, comparePassword, generateToken
};