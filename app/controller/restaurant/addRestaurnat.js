const Restaurant = require('../../models/Restaurant');
const { logger }  = require('../../utils/response');

exports.addRestaurant = (req, res) => {
  const { name, area, rating, menu_type, contact } = req.body;

  //Check for existing restaurant
  Restaurant.forge({ 'name': name }).fetch({ require: true })
    .then(() => {
      const message = `${name} is already registered !`;
      logger(message);
      return res.status(400).json({ message });
    })
    .catch(() => {

      //Add restaurant
      Restaurant.forge({ 'name': name, 'area': area, 'rating': rating, 'menu_type': menu_type, 'contact' : contact }).save()
        //success response
        .then(() => {
          const message = `${name} registered successfully`;
          logger(message);
          res.json({message});
        })
        //error response
        .catch(err => {
          const message = `Error adding ${name} to database`;
          logger(message);
          res.status(400).json({ message });
        });
    });
 }