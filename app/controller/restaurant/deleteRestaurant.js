const Restaurant = require('../../models/Restaurant');

exports.deleteRestaurant = (req, res) => {
  
  const name = req.body.name;
  
  Restaurant.forge({ 'name': name }).fetch({ require: true })
    .then(model => {
      Restaurant.forge({ 'id': model.get('id') }).destroy()
        .then(() => res.json({ message: `${name} deleted successfully` }))
        .catch((err) => {
          console.log(err);
          (res.status(400).json({ error: "Error deleteing restaurant" }))
        });
    })
    .catch(err => {
      console.log(err);
      (res.status(400).json({ error: "No restaurant found with the name you entered" }));
    });
};