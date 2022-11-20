const mongoose = require('mongoose');

const fishPedestalSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true,
    },
    price:{
        type : Number,
        require : true,
    },
    description:{
        type : String,
    },
    quantity:{
        type: Number,
        require: true,
    },
    img:{
        type: String,
        require: true,
    }
})
let FishPedestal = mongoose.model("FishPedestal",fishPedestalSchema);
module.exports = FishPedestal;