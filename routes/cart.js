const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');


router.get('/', CartController.get);
router.post('/add', CartController.add);
router.post('/subtract', CartController.subtract);
router.delete('/delete', CartController.subtract);
module.exports = router;
