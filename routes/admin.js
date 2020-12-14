const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router(); //router works similar to app, can usually be substituted

// /admin/add-product => GET
//req goes through file from top to bottom
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log("req.body", req.body);
    res.redirect('/');
})

module.exports = router;
