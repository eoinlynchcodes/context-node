const knex = require('knex');

const knexConfig = require('./knexfile.js');

// we must select the development object from our knexfile
const dbEnv = process.env.dbEnv || 'development';

// export for use in codebase
module.exports = knex(knexConfig[dbEnv]);