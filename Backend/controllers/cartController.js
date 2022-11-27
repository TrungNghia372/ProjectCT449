const Cart = require('../models/cart');
const Order = require('../models/order');
const Fish = require('../models/fish');
const FishPedestal = require('../models/fishPedestal');
const AquaticPlant = require('../models/aquaticPlant');
const mongoose = require('mongoose')

const cartController = {
     addToCart: async (req,res) => {
        try {
            const productExist = await Order.findOne({idCart:req.body.idCart, idProduct: req.body.idProduct})
            if (productExist) {
                const quantity = productExist.quantity + req.body.quantity;
                const resultUpdate = await Order.updateOne({idCart:req.body.idCart, idProduct: req.body.idProduct},{
                    quantity
                });
     
                if (resultUpdate.modifiedCount) {
                    res.json(true);
                }
                else res.json(false);

            } else {
                const result = await Order.create(req.body);
                if (result) {
                    res.json(true)
                } else {
                    res.json(false)
                }
            }
        } catch (error) {
            
        }

    },
    getCartProduct: async(req,res)=>{
        try {
            const resultFish = await Order.aggregate([
                {
                    "$match": {
                        "idCart": mongoose.Types.ObjectId(req.query.idCart)
                    }
                },
                {
                    "$lookup": {
                        "from": "fish",
                        "localField": "idProduct",
                        "foreignField": "_id",
                        "as": "list"
                    }
                }
            ]);

            const resultFishPedestal = await Order.aggregate([
                {
                    "$match": {
                        "idCart": mongoose.Types.ObjectId(req.query.idCart)
                    }
                },
                {
                    "$lookup": {
                        "from": "fishpedestals",
                        "localField": "idProduct",
                        "foreignField": "_id",
                        "as": "list"
                    }
                }
            ]);

            const resultAquaticPlant = await Order.aggregate([
                {
                    "$match": {
                        "idCart": mongoose.Types.ObjectId(req.query.idCart)
                    }
                },
                {
                    "$lookup": {
                        "from": "aquaticplants",
                        "localField": "idProduct",
                        "foreignField": "_id",
                        "as": "list"
                    }
                }
            ]);
            var arr = []
            resultFish.forEach(item=>{
                if(item.list[0]){
                    var obj = {...item.list[0]}
                    obj.quantity = item.quantity
                    arr.push(obj)
                }
            })
            resultFishPedestal.forEach(item=>{
                if(item.list[0]){
                    var obj = {...item.list[0]}
                    obj.quantity = item.quantity
                    arr.push(obj)
                }
            })
            resultAquaticPlant.forEach(item=>{
                if(item.list[0]){
                    var obj = {...item.list[0]}
                    obj.quantity = item.quantity
                    arr.push(obj)
                }
            })
            res.json(arr)
        } catch (error) {
            
        }
    },


    deleteProduct: async(req,res) => {
        try {
            await Order.findOneAndDelete({idProduct: mongoose.Types.ObjectId(req.query.idProduct)});
            res.json(true);
        } catch (error) {
            res.json(error);
        }
    },
    
    // countItem
    countQuantityItem: async(req,res) => {
        try {
            const countItem =await Order.countDocuments({idCart:req.query.idCart })
            res.json(countItem);
        } catch (error) {
            res.json(error);
        }
    },

    // pay
    pay: async(req,res) => {
        try {
            // console.log('ooookkkkk');
            // console.log(mongoose.Types.ObjectId(req.query.idCart))
            // await Order.findByIdAndDelete(mongoose.Types.ObjectId(req.query.idCart));
            await Order.deleteMany({idCart : mongoose.Types.ObjectId(req.query.idCart) })
            res.json(true);
        } catch (error) {
            res.json(error);
        }
    } 

}

module.exports = cartController;