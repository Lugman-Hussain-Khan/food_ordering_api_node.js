const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'lugman',
    password: 'password',
    database : 'food_ordering'
  }
})

module.exports.knex = knex;