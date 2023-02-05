const userDao = require('../dao/userDao.js')

class UserService {
    createUser(userDto){
        const {firstName, lastName, email} = userDto
        return userDao.createUser(firstName, lastName, email)
    }
}

module.exports = new UserService()