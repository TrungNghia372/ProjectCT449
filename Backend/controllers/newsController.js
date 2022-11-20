const News = require('../models/news');

const newsController = {
    //  Add news
    addNews : async(req,res) => {
        try {
            const newNews = new News(req.body);
            const saveNews = await newNews.save();
            res.status(200).json(saveNews);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all news
    getAllNews : async(req,res) => {
        try {
            const allNews = await News.find();
            res.status(200).json(allNews);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a news
    getANews : async(req,res) => {
        try {
            const aNews = await News.findById(req.params.id);
            res.status(200).json(aNews);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update News
    updateNews : async(req,res) => {
        try {
            const aNews = await News.findById(req.params.id);
            await aNews.updateOne({ $set: req.body });
            res.status(200).json("Updated News successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete News
    deleteNews : async(req,res) => {
        try {
            await News.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted News successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
   
    
}

module.exports = newsController;
