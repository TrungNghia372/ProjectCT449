const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
     idUser:{
        type : mongoose.Schema.Types.ObjectId,
        require : true,
     }

})

let Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart;