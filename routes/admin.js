const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const rootDir = require('../util/path');

//router works similar to app, but is used to split routes across multiple files
const router = express.Router(); 

// /admin/add-product => GET
//req goes through file from top to bottom
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;
