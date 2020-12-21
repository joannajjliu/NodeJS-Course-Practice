const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Product {// ES6 class syntax. Could also create a ES5 function.
    constructor(t) {
        this.title = t;
    }

    save() {//save method

        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this); //this refers to class, only with use of arrow function
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {//a utility function, fetches ALL products
        //static calls this method directly on the class itself, and not an instantiated object

        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                cb(JSON.parse(fileContent));
            }

        })
    }

}