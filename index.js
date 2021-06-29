const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
//Import Routes
const restaurantRoute = require('./app/routes/restaurant');
const orderRoute = require('./app/routes/order');

//Route Middleware
app.use('/restaurant', restaurantRoute);
app.use('/orders', orderRoute);

app.listen(3000, () => console.log('Server started'));
