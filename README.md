# pcypher
A lightweight JS library that helps you encrypt password.

[![Build Status: Linux](https://travis-ci.com/MugssyBoy/pcypher.svg?branch=master)](https://travis-ci.com/MugssyBoy/pcypher)


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
```
const { hasher } = require('pcypher');

(async() => {
    try {
        const password = 'A password to hash';
        const password = await hasher(plainTextPassword); // returns a hash password
        console.log(password);
    } catch (error) {
        console.error(error);
    }
})();
```


### To check a password
```
const { comparePassword } = require('pcypher');

(async() => {
    try {
        //password from request body
        const plainTextPassword = req.body.password;
        
        //return boolean true or false
        const comparison = await comparePassword(plainTextPassword, hashedPassword); //hashedPassword is the result of a password query to database
    } catch (error) {
        console.error(error);
    }
})();
```



### Authors
- 🐰 [Alex](https://github.com/MugssyBoy)



### License
The MIT License (MIT)