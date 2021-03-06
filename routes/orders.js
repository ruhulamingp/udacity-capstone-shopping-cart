const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');


router.get('/', OrderController.list);
router.post('/create', OrderController.placeOrder);
router.get('/:orderId', OrderController.get);
router.param('orderId', OrderController.load);
module.exports = router;
