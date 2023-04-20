const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


//router
const fishRoute = require('./routes/Fish');
const aquaticPlantRoute = require('./routes/AquaticPlant');
const fishPedestalRoute = require('./routes/FishPedestal');
const productRoute = require('./routes/Product');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/user');
const newsRoute = require('./routes/News');
const cartsRoute = require('./routes/Carts');
//------------------------------------------

dotenv.config();
//Connect Database with Mongoose
mongoose.connect((process.env.MONGODB_URL),() => {
    console.log('Connect to database with mongoose');
})
//-------------------------------------------
const createMongoose = require('./data/dataFish');
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
app.use("/api/fish",fishRoute);
app.use("/api/aquaticPlant",aquaticPlantRoute);
app.use("/api/fishPedestal",fishPedestalRoute);
// app.use("/api/product",productRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/news",newsRoute);
app.use("/api/cart",cartsRoute);
//
app.listen(4000, () => {
    console.log('Server is running...');
})