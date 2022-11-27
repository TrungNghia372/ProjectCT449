const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { json } = require('body-parser');
const Cart = require('../models/cart');

dotenv.config();

const authController = {
    // Register 

    registerUser : async (req,res) => {
        try {
            const countEmail =await User.countDocuments({ email:req.body.email });
            if (countEmail == 0) {
                const newUser = await User.create(req.body);

                const createCart = await Cart.create({idUser: newUser._id});
                console.log(createCart);

                res.status(200).json(true);
            }
            else {
                res.status(200).json(false);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Login
    loginUser : async (req,res) => {
        try {
            const user = await User.findOne({
                 username: req.body.username,
                 psw : req.body.psw});
            if (user) {
                var token = jwt.sign({id: user._id},process.env.JWT_ACCESS_KEY);
                res.json(token);
            }     
            else {
                res.json(false);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getloginUser: async(req,res) => {
        try {
            const obj  = jwt.verify(req.query.token, process.env.JWT_ACCESS_KEY)
            var user = await User.findOne({_id: obj.id}).select("-psw -createdAt -updatedAt -_id")
            var cart = await Cart.findOne({idUser: obj.id});
           
            if(user){
                res.json({user:user, idCart: cart._id})
            } else {
                res.json(false)
            }
        } catch(e){
            console.log(e)
        }
    },


 
};

module.exports = authController;