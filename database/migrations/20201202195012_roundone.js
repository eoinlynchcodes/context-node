
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.text('name');
      table.text('email');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
