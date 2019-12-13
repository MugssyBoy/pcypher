const key = require('ckey');
const crypto = require('crypto');

const encrypt = password => new Promise((resolve, reject) => crypto.scrypt(password, key.SECRET_KEY, parseInt(key.KEY_LENGTH), (err, dd) => resolve(dd.toString('hex'))));

exports.hasher =  async password => await encrypt(password);
exports.comparePassword = async (plainTextPassword, hashedPassword) => await hasher(plainTextPassword) === hashedPassword ? true : false;
