const router = require('express').Router();

//Import Order fuctions
const { addOrder } = require('../controller/orders/addOrder');
const { getOrders } = require('../controller/orders/getOrders');

const { validation }  = require('../middleware/validate');

//Create an Order
router.post('/place_order', validation.addOrder, addOrder);

//Get all orders
router.get('/all_orders', getOrders);

module.exports = router;