const FishPedestal = require('../models/fishPedestal');
const { getFishDetail } = require('./fishcontroller');

const fishPedestalController = {
    // Add fishPedestal
    addFishPedestal : async(req,res) => {
        try {
            const newFishPedestal = new FishPedestal(req.body);
            const saveFishPedestal = await newFishPedestal.save();
            res.status(200).json(saveFishPedestal);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all fishPedestal
    getAllFishPedestal : async(req,res) => {
        try {
            const fishPedestals = await FishPedestal.find();
            res.status(200).json(fishPedestals);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a fishPedestal
    getAFishPedestal : async(req,res) => {
        try {
            const aFishPedestal = await FishPedestal.findById(req.params.id);
            res.status(200).json(aFishPedestal); 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update a fishPedestal
    updateFishPedestal: async(req,res) => {
        try {
            const aFishPedestal = await FishPedestal.findById(req.params.id);
            await aFishPedestal.updateOne({ $set: req.body });
            res.status(200).json("Updated fishPedestal successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete fishPedestal
    deleteFishPedestal: async(req,res) => {
        try {
            await FishPedestal.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted FishPedestal successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get list FishPedestal
    getListFishPedestal: async(req,res) => {
        try {
            const listFishPedestal = await FishPedestal.find({}).limit(5);
            res.status(200).json(listFishPedestal);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Detail 
    getFishPedestalDetail: async(req,res) => {
        try {
            const result = await FishPedestal.findOne({_id:req.query.id});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Suggest
    getSuggestFishPedestal: async(req,res) => {
        try {
            const result = await FishPedestal.find({}).limit(6).skip(Math.floor(Math.random()*5));
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = fishPedestalController;