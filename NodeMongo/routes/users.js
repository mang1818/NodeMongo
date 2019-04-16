var express = require('express');
var router = express.Router();
const Product = require('./api/product');
const fetch = require('node-fetch');
const axios = require('axios');
/* GET users listing. */
router.get('/', function(req, res, next) {
      axios.get('http://localhost:3001/product/').then(function(result) {
        res.render('users',{title : "Product", products : result.data});
  });
});

// router.get('/', function (req, res, next) {
//   fetch('http://localhost:3001/product/').then(res => res.json()).then(function(data) {
//     // res.render('users',{title : "Product", products : data});
//       console.log(data);
//   });
// });

module.exports = router;
