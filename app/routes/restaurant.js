const router = require('express').Router();

//Import route functions
const { addRestaurant } = require('../controller/restaurant/addRestaurnat');
const { deleteRestaurant } = require('../controller/restaurant/deleteRestaurant');
const { getRestaurant } = require('../controller/restaurant/getRestaurant');
const { updateRestaurant } = require('../controller/restaurant/updateRestaurant');
const { getRestaurantOrders } = require('../controller/restaurant/getRestaurantOrders');

const { validation }  = require('../middleware/validate');

//Add a restaurant
router.post('/add_restaurant', validation.addRestarunt , addRestaurant);

//Get all restaurants
router.get('/all_restaurants', getRestaurant);

//Update a restaurant
router.patch('/update_restaurant', validation.updateRestaurant, updateRestaurant);

//Delete a restaurant
router.delete('/delete_restaurant',validation.deleteRestaurant , deleteRestaurant);

//Fetch Restaurant with its orders
router.get('/restaurant_orders', getRestaurantOrders);

module.exports = router;