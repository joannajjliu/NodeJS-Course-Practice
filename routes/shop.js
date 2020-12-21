const path = require('path'); //use for correctly reaching path in file, instead of OS

const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router(); //router works similar to app, can usually be substituted

// **app.get and router.get ensure GET is an EXACT match.
// app.use and router.use does not need to be an EXACT match.
router.get('/', productsController.getProducts);

module.exports = router;
