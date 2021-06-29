const Order = require('../../models/Order');

exports.getOrders = (req, res) => {
  
  Order.fetchAll()
    .then(data => res.json({ data }))
    .catch(err => {
      res.status(400).json({ error: "Error getting orders" });
      console.log(err);
    });
  
};