const app = require('express');
const router = app.Router();
const Product = require('./models/product');
const mongoose = require('mongoose');
router.get('/', function (req, res, next) {
    Product.find({}, function (err, product) {
        res.status(200).send(product);
        // res.send('hello');
    });
});

router.post('/product-save', function (req, res, next) {
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {res.send(result)});
});
module.exports = router;