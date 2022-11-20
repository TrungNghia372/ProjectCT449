const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    description:{
        type : String,
    },
    popularType:{
        type : Boolean,
    },
    habitat:{
        type : String,
    },
    quantity:{
        type: Number,
        required: true,
    },
    img:{    
        type: String,
        required: true,
    }
})
let Fish = mongoose.model("Fish",fishSchema);

module.exports = Fish;