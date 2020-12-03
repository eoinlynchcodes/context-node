require('dotenv').config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.REACT_APP_DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
  }
};