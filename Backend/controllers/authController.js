const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authController = {
    // Register 
    registerUser : async (req,res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUser = await new User({
                username : req.body.username,
                password : hashed,
                email : req.body.email,
            })
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Generate access token
    generateAccessToken: (user) =>{
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "30d" }
        );
    },
     // Generate refresh token
    // generateRefreshToken: (user) => {
    //     return jwt.sign(
    //         {
    //             id: user.id,
    //             admin: user.admin,
    //         },
    //         process.env.JWT_REFRESH_KEY,
    //         { expiresIn: "365d" }
    //     );
    // },

    // Login
    loginUser : async (req,res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) {
                res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );
            if (!validPassword) {
                res.status(404).json("Wrong password!");
            }

            if (user && validPassword) { 

              const accessToken = authController.generateAccessToken(user);
            //   const refreshToken = authController.generateRefreshToken(user);
            // save access token to Cookie
                res.cookie("access_token",accessToken, {
                    httpOnly: true,
                    secure:false,
                });
            // trả về không có password vì sẽ nguy hiểm
                const {password,...others} = user._doc;
                res.status(200).json({...others});              
            }

        } catch (error) {
            res.status(500).json(error);
        }
    },
    //logout
    logoutUser: async(req,res) => {
        return res.clearCookie("access_token").status(200).json("Successfully logged out");
    },
};

module.exports = authController;