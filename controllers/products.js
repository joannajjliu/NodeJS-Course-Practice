const path = require('path');
const rootDir = require('../util/path');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    console.log("req.body", req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', {docTitle: 'Shop', prods: products});
    });

    

    // '../' OR '..' means "go up one level" for path.join
    //DON't use '/', path.join automatically builds the path for different OS filesystems
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
};