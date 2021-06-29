const Restaurant = require('../../models/Restaurant');

exports.getRestaurantOrders = (req, res) => {

  const res_id = parseInt(req.query.res_id);
  if (!res_id)
    return res.json({ error: "Query is required" });
  
  Restaurant.where({ id: res_id }).fetch({
    withRelated: ['orders'], require: true
  })
    .then(data => res.json({ data }))
    .catch(err => {
      res.status(400).json({ error: "Error getting restaurant orders" });
      console.log(err);
    });
  
};