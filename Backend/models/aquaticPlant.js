const mongoose = require('mongoose');

const aquaticPlantSchema = new mongoose.Schema({
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

let AquaticPlant = mongoose.model("AquaticPlant",aquaticPlantSchema);
module.exports = AquaticPlant;

