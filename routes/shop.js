const path = require('path'); //use for correctly reaching path in file, instead of OS

const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router(); //router works similar to app, can usually be substituted

// **app.get and router.get ensure GET is an EXACT match.
// app.use and router.use does not need to be an EXACT match.
router.get('/', (req, res, next) => {
    console.log("In the NEXT middleware", adminData.products);
    const products = adminData.products;
    res.render('shop', {docTitle: 'Shop', prods: products});

    // '../' OR '..' means "go up one level" for path.join
    //DON't use '/', path.join automatically builds the path for different OS filesystems
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
})

module.exports = router;
