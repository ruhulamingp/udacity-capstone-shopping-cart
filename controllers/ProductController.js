const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const Product = require('../models/Product');

exports.load = function (req, res, next, id) {
  Product.get(id)
    .then(product => {
      req.product = product;
      return next();
    })
    .catch(err => {
      const error = new APIError(err.message, httpStatus.NOT_FOUND, true);
      return next(error);
    });
};

exports.get = function (req, res, next) {
  return res.json(req.product);
};

exports.create = function (req, res, next) {
  const productData = {
    name: req.body.name,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    quantity: req.body.quantity
  };
  if (req.body.model) {
    productData.model = req.body.model;
  }
  if (req.body.specification) {
    productData.specification = req.body.specification;
  }
  const product = new Product(productData);

  product
    .save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
};

exports.update = function (req, res, next) {
  const product = req.product;

  product.name = req.body.name ? req.body.name : product.name;
  product.brand = req.body.brand ? req.body.brand : product.brand;
  product.category = req.body.category ? req.body.category : product.category;
  product.model = req.body.model ? req.body.model : product.model;
  product.specification = req.body.specification ? req.body.specification : product.specification;
  product.quantity = req.body.quantity ? req.body.quantity : product.quantity;
  product.price = req.body.price ? req.body.price : product.price;

  product
    .save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
};

exports.list = function (req, res, next) {
  const {
    category = '',
    brand = '',
    sort = 'quantity',
    sorder = 'desc',
    limit = 50,
    skip = 0
  } = req.query;
  Product.list({category, brand, sort, sorder, limit, skip })
    .then(products => res.json(products))
    .catch(e => next(e));
};
