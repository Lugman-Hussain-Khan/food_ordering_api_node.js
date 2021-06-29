const knex = require('../utils/db').knex;
const bookshelf = require('bookshelf')(knex);
const Order = require('./Order');

bookshelf.plugin('bookshelf-update');

const Restaurant = bookshelf.Model.extend({
  tableName: 'restaurants',
  orders : function () {
    return this.hasMany(Order);
  }
});

module.exports = Restaurant;