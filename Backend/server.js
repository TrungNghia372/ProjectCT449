const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


//router
const bookRoute = require('./routes/Book');
const productRoute = require('./routes/Product');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/User');
const newsRoute = require('./routes/News');
const cartsRoute = require('./routes/Carts');
//------------------------------------------

dotenv.config();


mongoose.connect("mongodb+srv://trunghieu:w5NEz8qg@cluster0.juwgljj.mongodb.net/").then(()=>{
    console.log('connect successed DB');
}).catch(()=>{console.log('error connect DB')})

//-------------------------------------------
// const createMongoose = require('./data/dataBook');
// lay data cho home

// createMongoose.createDataFishPedestal();
// createMongoose.createDataFish(); 
// createMongoose.createDataAquaticPlant();

// createMongoose.createDataNews(); 
//-------------------------------------------

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('common'));
app.use(cookieParser());
//Routes
app.use("/api/book",bookRoute);                     //------------------------------------------da lam

app.use("/api/product",productRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/news",newsRoute);
app.use("/api/cart",cartsRoute);
//
app.listen(4000, () => {
    console.log('Server is running...');
})