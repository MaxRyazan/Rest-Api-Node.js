const db = require('../db_connection/db_connection.js')

class UserDao{
    async createUser(firstName, lastName, email){
        const [id] = await db('users')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email
            })
        return id
    }
}

module.exports = new UserDao()