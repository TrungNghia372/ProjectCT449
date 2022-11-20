const Fish = require('../models/fish')

const fishController = {
    // Add fish
    addFish : async(req,res) => {
        try {
            const newFish = new Fish(req.body);
            const saveFish = await newFish.save();
            res.status(200).json(saveFish);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all fish
    getAllFish : async(req,res) => {
        try {
            var obj = {};
            if (req.query.habitat) obj={habitat: req.query.habitat};
            console.log(req.url)
            const fishs = await Fish.find(obj);
            res.status(200).json(fishs);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a fish
    getAFish: async(req,res) => {
        try {
            const aFish = await Fish.findById(req.params.id);
            res.status(200).json(aFish);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update fish
    updateFish: async(req,res) => {
        try {
            const aFish = await Fish.findById(req.params.id);
            await aFish.updateOne({ $set: req.body });
            res.status(200).json("Updated Fish successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete fish
    deleteFish: async(req,res) => {
        try {
            await Fish.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Fish successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Home
    getListFishHome: async(req,res) => {
        try {
            const listFish = await Fish.find({}).limit(5);
            res.status(200).json(listFish);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get FishDetail
    getFishDetail: async(req,res) => {
        try {
            const result = await Fish.findOne({_id:req.query.id});
            res.status(200).json(result);
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get list popular fish
    getPopularFish: async(req,res) => {
        try {
            const listFishPopular = await Fish.find({popularType: true});
            res.status(200).json(listFishPopular);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get Suggest Fish
    getSuggestFish: async(req,res) => {
        try {
            const obj = await Fish.findOne({_id: req.query.id}).select("-_id habitat");
            // console.log(obj.habitat)
            const result = await Fish.find({habitat: obj.habitat}).limit(6).skip(Math.floor(Math.random()*5));
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },

   




    


}

module.exports = fishController;