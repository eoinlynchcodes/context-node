exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', table => {
      table.increments();
      table.text('name');
      table.text('email').unique();
  });
}

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users');
}
