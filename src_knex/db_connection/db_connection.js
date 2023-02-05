const knex = require('knex');
const knexfile = require('../db_connection/knexfile.js')

const db = knex(knexfile.development)

module.exports = db;