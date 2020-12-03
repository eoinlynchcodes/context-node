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
  connection: process.env.REACT_APP_DATABASE_URL,
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
};