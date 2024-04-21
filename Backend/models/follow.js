const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
     idUser:{
        type : mongoose.Schema.Types.ObjectId,
        require : true,
     },
     idProducts:{
        type : [mongoose.Schema.Types.ObjectId],
        require : true,
     },
     payDate: {
        type: Date,
        require: true
     },
     borrowedDate: {
        type: Date,
        require: true
     }
})

let Follow = mongoose.model("Follow",followSchema);
module.exports = Follow;