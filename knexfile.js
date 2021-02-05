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
  connection: process.env.DATABASE_URL,
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
      ssl: true,
  }),
  migrations: {
    tablename: "knex_migrations",
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
}
};