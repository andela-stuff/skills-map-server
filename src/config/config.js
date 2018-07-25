
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'skill_map_server',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
