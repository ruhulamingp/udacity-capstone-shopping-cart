const express = require('express');
const router = express.Router();
const validate = require('express-validation');

const config = require('../config/index');
const paramValidation = require('../config/param-validation');
const ProductController = require('../controllers/ProductController');
router
  .route('/')
  /** GET /api/products - Get list of products */
  .get(ProductController.list)

  /** POST /api/products - Create new product */
  .post(
    validate(paramValidation.createProduct),
    ProductController.create
  );

router
  .route('/:productId')
  .get(ProductController.get)

  .put(
    validate(paramValidation.updateProduct),
    ProductController.update
  )


router.param('productId', ProductController.load);
module.exports = router;
