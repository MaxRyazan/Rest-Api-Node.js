/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id');
      table.string('email', 255).notNullable().unique();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
      table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

//  npx knex migrate:make init --migrations-directory src_knex/db_connection/migration
// npx knex migrate:latest --knexfile knexfile.js