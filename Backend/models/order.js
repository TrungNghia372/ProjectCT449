const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    idCart : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
    },
    idProduct : {
        type : mongoose.Schema.Types.ObjectId,
    },
    quantity : {
        type : Number,
    },
})
let Order = mongoose.model("Order",orderSchema);
module.exports = Order;