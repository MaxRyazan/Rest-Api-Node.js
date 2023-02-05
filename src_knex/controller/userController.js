const userService = require('../service/userService.js')

class UserController {
    async createUser(req, res){
        try{
            const id  = await userService.createUser(req.body)
            res.status(201).json(id)
        } catch (e) {
            
        }
    }

}

module.exports = new UserController()