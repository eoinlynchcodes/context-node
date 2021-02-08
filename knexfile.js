require('dotenv').config();

module.exports = {
development: {
  client: 'sqlite3',
  connection: {
    filename: './database/test.db3'
  },
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds'
  },
},

production: {
  client: 'pg',
  connection: {
    database: process.env.DATABASE_URL,
    ssl: true
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
}
};