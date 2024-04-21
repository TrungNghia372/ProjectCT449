const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
})

let Publisher = mongoose.model("Publisher",publisherSchema);
module.exports = Publisher;