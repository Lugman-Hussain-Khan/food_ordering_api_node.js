const Restaurant = require('../../models/Restaurant');

exports.updateRestaurant = (req, res) => {

  const { name, key, value } = req.body;

  Restaurant.forge({ 'name': name }).fetch()
    .then(data => data.set(key, value))
    .then(data => data.update())
    .then(() => res.json({ message: `${name} updated their ${key} to ${value}` }))
    .catch(err => {
      res.status(400).json({ error: "Error updating restaurant details" });
      console.log(err);
    });

};