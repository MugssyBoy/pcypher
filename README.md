# pcypher
A lightweight JS library that helps you encrypt password.


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
    let password = await hasher(plainTextPassword); // return a hash password
})();
```


### To check a password
```
const { comparePassword } = require('pcypher');

(async() => {
    let comparison = await comparePassword(plainTextPassword, hashedPassword); //return boolean true or false
})();
```



### Authors
- 🐰 [Alex](https://github.com/MugssyBoy)



### License
The MIT License (MIT)