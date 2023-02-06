const userService = require('../service/userService.js')

class UserController {

    async createUser(req, res){
        try{
            const id  = await userService.createUser(req.body)
            res.status(201).json(id)
        } catch (e) {
            res.status(400).json({'error': 'Неверное тело запроса!', 'code': 400})
        }
    }

    async showAllUsers(req, res){
        try{
            const users = await userService.showAllUsers();
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json({'error': 'Ошибка сервера!', 'code': 500})
        }
    }

    async showById(req, res){
        try{
            const id = req.params.id
            const user = await userService.showById(id)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json({'error': 'Ошибка сервера!', 'code': 500})
        }
    }

    async deleteById(req, res){
        try{
            const id = req.params.id
            await userService.deleteById(id)
            res.status(200).json(`Пользователь с id ${id} был успешно удалён!`)
        } catch (e) {
            res.status(500).json({'error': 'Ошибка сервера!', 'code': 400})
        }
    }

}

module.exports = new UserController()