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
        return db('users')
            .delete("*").where('id', '=', `${id}`)
    }

    async updateUser(userDto){
        const {first_name, last_name, email, id} = userDto
        console.log(first_name, last_name, email)
          return db('users')
            .update({
                first_name,
                last_name,
                email,
                updated_at: new Date()
            })
            .where('id', '=', `${id}`)
    }
}

module.exports = new UserRepository()