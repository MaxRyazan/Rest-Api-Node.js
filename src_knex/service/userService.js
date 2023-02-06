const userDao = require('../dao/userDao.js')

class UserService {

    createUser(userDto){
        const {firstName, lastName, email} = userDto
        return userDao.createUser(firstName, lastName, email)
    }
    showAllUsers(){
        return userDao.showAllUsers()
    }
    showById(id){
        return userDao.showById(id)
    }

}

module.exports = new UserService()