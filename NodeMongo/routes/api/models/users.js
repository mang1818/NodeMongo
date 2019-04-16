const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    username: {
        type: String,
        unique: true
    },
    name : {
        type: String,
        required : true,
        minLength : 6,
        maxLength : 20
    },
    email : {
        type: String,
        required : true,
        minLength : 6,
        maxLength : 20
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /[2-9]{2}\d{8}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    password : {
        type: String,
        required : true,
        minLength : 6,
        maxLength : 20
    },
});

module.exports = mongoose.model('Users', usersSchema);