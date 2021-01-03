exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('prospects', table => {
        table.increments();
        table.text('name');
        table.text('email').unique();
    })
    .createTable('meetings', table => {
        table.increments('id');
        table.date('date');
        table.string('agenda');
        table.string('context');
        table.text('whoisneeded');
        table.text('meetingtitle');
        table.time('startTime', { precision: 6 });
        table.time('endTime', { precision: 6 });
        table.string('meetingtype');
        table.text('decisionstomake');
    })
    .createTable('users', table => {
        table.increments('id');
        table.string('firstname');
        table.string('lastname');
        table.string('username').unique();
        table.string('password');
        table.string('emailaddress').unique();
        table.string('companyname');
    })
    .createTable('companies', table => {
        table.increments('id');
        table.string('companyname').unique();
        table.string('industry');
        table.integer('numberofemployees');
        table.integer('founderid').references('id').inTable('users');
    })
    .createTable('meetingreports', table => {
        table.increments('id');
        table.integer('originalmeetingid').references('id').inTable('meetings');
        table.string('agenda');
        table.string('context');
        table.date('date');
        table.string('decisionstomake');
        table.string('whoisneeded');
        table.string('meetingtitle');
        table.string('decisionresults');
        table.string('nextsteps');
        table.string('notes');
    })
  }
  
  exports.down = function(knex, Promise) {
      return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('meetings')
      .dropTableIfExists('users')
      .dropTableIfExists('companies')
      .dropTableIfExists('meetingreports')
  }
