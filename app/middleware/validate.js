const { check, validationResult } = require('express-validator');

function errorMsg (req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) 
    return res.json({ message: "All fields are important and must be of desiered format", error });
  next();
};

exports.validation = {

  addRestarunt: [
    [
      check('name').exists().isString().isLength({ min: 4, max: 20 }),
      check('area').exists().isIn(['karumandapam', 'contonment', 'manarpuram']),
      check('rating').exists().isInt(),
      check('menu_type').exists().isIn(['veg', 'non-veg']),
      check('contact').exists().isInt()
    ],
    (req, res, next) => errorMsg(req, res, next)
  ],

  updateRestaurant: [
    [
      check('name').exists().isString({ min: 4, max: 20 }),
      check('key').exists(),
      check('value').exists()
    ],
    (req, res, next) => errorMsg(req, res, next)
  ],

  deleteRestaurant: [
    check('name').exists().isString().isLength({ min: 4, max: 20 }),
    (req, res, next) => errorMsg(req, res, next)
  ],

  addOrder: [
    [
      check('restaurant_id').exists(),
      check('dish').exists(),
      check('quantity').exists().isInt(),
      check('rating').exists().isInt()
    ],
    (req, res, next) => errorMsg(req, res, next)
  ]
};