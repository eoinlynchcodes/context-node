require('dotenv').config();

export const development = {
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
};
export const production = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tablename: "knex_migrations",
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
};