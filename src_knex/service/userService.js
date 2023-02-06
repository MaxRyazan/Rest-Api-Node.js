const userRepository = require('../repository/userRepository.js')

class UserService {

    createUser(userDto){
        const {firstName, lastName, email} = userDto
        return userRepository.createUser(firstName, lastName, email)
    }
    showAllUsers(){
        console.log('service')
        return userRepository.showAllUsers()
    }
    showById(id){
        return userRepository.showById(id)
    }
    deleteById(id){
        return userRepository.deleteById(id)
    }
    updateUser(userDto){
        return userRepository.updateUser(userDto)
    }

}

module.exports = new UserService()