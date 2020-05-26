const { resolve } = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      dialect: 'postgres',
      user: 'postgres',
      database: 'barber',
      password: 'docker',
      host: '127.0.0.1',
      port: '5432',
    },

    migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },
};
