const db = require('../db_connection/db_connection.js')

class UserRepository {

    async createUser(firstName, lastName, email){
        const [id] = await db('users')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email
            })
        return id
    }

    async showAllUsers(){
        return db('users')
            .select("*");
    }

    async showById(id){
        return db('users')
            .select("*").where('id', '=', `${id}`)
    }

    async deleteById(id){
        db('users')
            .delete("*").where('id', '=', `${id}`)
        console.log(`user with id = ${id} was successfully deleted`)
    }
}

module.exports = new UserRepository()