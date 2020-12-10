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
        table.text('whoIsNeeded');
        table.text('meetingTitle');
        table.time('startTime', { precision: 6 });
        table.time('endTime', { precision: 6 });
        table.string('meetingType');
        table.text('decisionsToMake');
    })
    .createTable('users', table => {
        table.increments('id');
        table.string('firstName');
        table.string('lastName');
        table.string('username').unique();
        table.string('password');
        table.string('emailAddress').unique();
        table.string('companyName');
    })
    .createTable('companies', table => {
        table.increments('id');
        table.string('companyName').unique();
        table.string('industry');
        table.integer('numberOfEmployees');
        table.integer('founderID').references('id').inTable('users');
    })
    .createTable('meetingResults', table => {
        table.increments('id');
        table.integer('originalMeetingID').references('id').inTable('meetings');
        table.string('agenda');
        table.string('context');
        table.date('date');
        table.string('decisionsToMake');
        table.string('whoIsNeeded');
        table.string('meetingTitle');
        table.string('decisionResults');
        table.string('nextSteps');
        table.string('notes');
    })
  }
  
  exports.down = function(knex, Promise) {
      return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('meetings')
      .dropTableIfExists('users')
      .dropTableIfExists('companies')
      .dropTableIfExists('meetingResults')
  }
