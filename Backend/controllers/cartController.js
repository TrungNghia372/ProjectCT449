const Cart = require('../models/cart');
const Order = require('../models/order');
const Book = require('../models/book');
const Follow = require('../models/follow');
const User = require('../models/user');
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
            const resultBook = await Order.aggregate([
                {
                    "$match": {
                        "idCart": mongoose.Types.ObjectId(req.query.idCart)
                    }
                },
                {
                    "$lookup": {
                        "from": "books",
                        "localField": "idProduct",
                        "foreignField": "_id",
                        "as": "list"
                    }
                }
            ]);

            var arr = []
            resultBook.forEach(item=>{
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
        console.log(req.query);
        try {
            const userExit = await User.find({email : req.query.emailUser});
            console.log(userExit);
            const resultFollow = await Follow.create({
                idUser: userExit[0]._id,
                idProducts: req.query.idProducts,
                borrowedDate: req.query.borrowedDate,
                payDate: req.query.payDate,

            });
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