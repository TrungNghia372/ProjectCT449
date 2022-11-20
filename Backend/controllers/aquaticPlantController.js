const AquaticPlant = require('../models/aquaticPlant')

const aquaticPlantController = {
    // Add aquaticPlant
    addAquaticPlant: async(req,res) => {
        try {
            const newAquaticPlant = new AquaticPlant(req.body);
            const saveAquaticPlant = await newAquaticPlant.save();
            res.status(200).json(saveAquaticPlant);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all aquaticPlant
    getAllAquaticPlant: async(req,res) => {
        try {
            const aquaticPlants = await AquaticPlant.find();
            res.status(200).json(aquaticPlants);
        } catch (error) {
            res.status(500).json(error);   
        }
    },
    // Get all aquaticPlant
    getAnAquaticPlant: async(req,res) => {
        try {
            const anAquaticPlant = await AquaticPlant.findById(req.params.id);
            res.status(200).json(anAquaticPlant);
        } catch (error) {
            res.status(500).json(error);   
        }
    },
    // Update aquaticPlant
    updateAquaticPlant: async(req,res) => {
        try {
            const anAquaticPlant = await AquaticPlant.findById(req.params.id);
            await anAquaticPlant.updateOne({ $set: req.body });
            res.status(200).json("Updated AquaticPlant successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete aquaticPlant
    deleteAquaticPlant: async(req,res) => {
        try {
            await AquaticPlant.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted AquaticPlant successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Home
    getListAquaticPlantHome: async(req,res) => {
        try {
            const listAquaticPlant = await AquaticPlant.find({}).limit(5);
            res.status(200).json(listAquaticPlant);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Detail
    getDetail: async(req,res) => {
        try {
            const result = await AquaticPlant.findOne({_id:req.query.id});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Suggest
    getSuggestAquaticPlant: async(req,res) => {
        try {
            const result = await AquaticPlant.find({}).limit(6).skip(Math.floor(Math.random()*5));
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
};

module.exports = aquaticPlantController;