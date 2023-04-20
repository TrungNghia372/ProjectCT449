const Fish = require('../models/fish')
const FishPedestal = require('../models/fishPedestal')
const AquaticPlant = require('../models/aquaticPlant')

const productController = {
    getProduct : async(req,res) => {
        try {
            const listFish = await Fish.find({});
            const listFishPedestal = await FishPedestal.find({});
            const listAquaticPlant = await AquaticPlant.find({});
            const listProduct = listProduct.concat(listFish, listFishPedestal, listAquaticPlant);
         
            //   console.log(listProduct);
            res.status(200).json(listFish);
        } catch (error) {
            console.log(error);
        }
    }
}   
module.exports = productController;
