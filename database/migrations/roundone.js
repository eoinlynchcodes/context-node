export function up(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments();
      table.text('name');
      table.text('email');
  });
}

export function down(knex) {
    return knex.schema
    .dropTableIfExists('users');
}
