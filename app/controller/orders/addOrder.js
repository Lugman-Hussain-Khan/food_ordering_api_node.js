const Order = require('../../models/Order');

exports.addOrder = (req, res) => {

  const { restaurant_id, dish, quantity, rating } = req.body;
  
  Order.forge({ 'restaurant_id': restaurant_id, 'dish': dish, 'quantity': quantity, 'rating': rating }).save()
    .then(() => res.json({ message: "Order successfully placed :)" }))
    .catch(err => {
      res.status(400).json({ error: "Error placing order" });
      console.log(err);
    });
  
};