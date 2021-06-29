const Restaurant = require('../../models/Restaurant');

exports.getRestaurant = (req, res) => {
  
  let size = parseInt(req.query.rating);
  
  if (!size) size = 0;
  
  Restaurant.where('rating', '>=', size).fetchAll()
    .then(data => res.json({ data }))
    .catch(err => {
      res.status(400).json({ error: "Unable to get all restaurants" });
      console.log(err);
    });
};