const knex = require('../utils/db').knex;
const bookshelf = require('bookshelf')(knex);

const Order = bookshelf.Model.extend({

  tableName: 'orders',

});

module.exports = Order;