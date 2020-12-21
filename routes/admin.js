const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

//router works similar to app, but is used to split routes across multiple files
const router = express.Router(); 

const products = [];


// /admin/add-product => GET
//req goes through file from top to bottom
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log("req.body", req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
})

exports.routes = router;
exports.products = products;
