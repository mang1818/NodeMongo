const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
const Users = require('./models/users');

router.get('/', function (req, res, next) {
    Users.find({}, function (err, data) {
       res.status(200).send(data);
    });
});

router.post('/register-user', function (req, res, next) {
    const users = new Users({
       _id : new mongoose.Types.ObjectId,
       username: req.body.username,
       name : req.body.name,
       email : req.body.email,
       phone : req.body.phone,
        password : req.body.password
    });
    users.save(function (err, data) {
        if (err) res.send(err);
        res.send(data);
    });
});
router.post('/find-by-usersname', function (req, res, next) {
    Users.find({username: req.body.username}, function (err, data) {
        if (err) res.send(err);
        res.send(data);
    });
});
router.put('/update-users/:username',function (req, res, next) {
   Users.update({username:req.params.username},{password: req.body.password,phone:req.body.phone}, function (err, data) {
       if (err) res.send(err);
       res.send(data);
   });
});
module.exports = router;