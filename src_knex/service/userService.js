const userRepository = require('../repository/userRepository.js')

class UserService {

    createUser(userDto){
        const {firstName, lastName, email} = userDto
        return userRepository.createUser(firstName, lastName, email)
    }
    showAllUsers(){
        return userRepository.showAllUsers()
    }
    showById(id){
        return userRepository.showById(id)
    }

}

module.exports = new UserService()