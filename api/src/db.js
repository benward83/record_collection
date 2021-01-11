const knex = require('knex');

const db = knex({
  client: 'postgresql',
  connection: {
    host: 'postgresql',
    database: 'recc',
    user:     'recc',
    password: 'recc'
  }
});

module.exports = db;
