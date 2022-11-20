const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    idCart : {
        type : {mongoose.Schema.Types.ObjectId, ref="Cart"},
        require: true,
    },
    idProduct : {
        type : mongoose.Types.ObjectId,
    },
    dateOrder : {
        type : Object,
    },
    quantity : {
        type : Number,
    },
})
let Order = mongoose.model("Order",orderSchema);
module.exports = Order;