const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        // minlength : 6,
        // maxlength : 30,
        unique : true,
    },
    psw: {
        type : String,
        required : true,
        // minlength: 6,
    },
    email: {
        type : String,
        required : true,
        // minlength : 6,
        // maxlength : 50,
        unique : true,
    },
},  { timestamps: true }
);
let User = mongoose.model('User',userSchema);
module.exports = User;