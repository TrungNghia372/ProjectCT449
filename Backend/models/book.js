const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    author:{
        type : String,
        required : true,
    }, 
    description:{
        type : String,
        required : true,
    },
    type:{
        type : String,
    },
    manufactureOfYear:{
        type : String,
        required : true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    img:{    
        type: String,
        required: true,
    }
})
let Book = mongoose.model("Book",bookSchema);

module.exports = Book;