# pcypher
A lightweight JS library that helps you encrypt password.

[![NPM](https://nodei.co/npm/pcypher.png)](https://www.npmjs.com/package/pcypher)

[![Github issues](https://img.shields.io/github/issues/MugssyBoy/pcypher.svg)](https://github.com/MugssyBoy/pcypher/issues) [![Build Status: Linux](https://travis-ci.com/MugssyBoy/pcypher.svg?branch=master)](https://travis-ci.com/MugssyBoy/pcypher) [![npm](https://img.shields.io/npm/v/pcypher.svg)](https://www.npmjs.com/package/pcypher) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE-MIT)


## Install via NPM
```npm install pcypher```


## Usage


### Required to Create an Environment Variable
Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```
# environment sample content

SECRET_KEY=InputRandomKeyHere
KEY_LENGTH=16
```


### To hash a password

```js
const { hasher } = require('pcypher');

(async() => {
    try {
        const plainTextPassword = 'A password to hash';
        // returns a hash password
        const password = await hasher(plainTextPassword);
        console.log(password); //e8d3......3e60
    } catch (error) {
        console.error(error);
    }
})();
```


### To check a password
```js
const { comparePassword } = require('pcypher');

(async() => {
    try {
        //password from request body
        const plainTextPassword = req.body.password;
        //return boolean true or false
        const comparison = await comparePassword(plainTextPassword, hashedPassword);
        //hashedPassword: a password loaded from database
    } catch (error) {
        console.error(error);
    }
})();
```

### Works also as a Promise
```js
const { comparePassword } = require('pcypher');

const plainTextPassword = 'A password to hash';
const password = hasher(plainTextPassword);
    
password
    .then(result => {
        console.log(result) //e8d3......3e60
    })
```


### Authors
- 🐰 [Alex](https://github.com/MugssyBoy)



### License
The MIT License (MIT)