const Publisher = require('../models/publisher')

const publisherController = {
    addPublisher : async(req,res) => {
        try {
            console.log("Add publisher");
            console.log(req.body);
            const newPublisher = new Publisher(req.body);
            const savePublisher = await newPublisher.save();
            res.status(200).json(savePublisher);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllPublisher : async(req,res) => {
        try {
            console.log("get all publisher");
            var obj = {};
            if (req.query.type) obj={type: req.query.type};
            console.log(req.url)
            const publishers = await Publisher.find(obj);
            res.status(200).json(publishers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAPublisher: async(req,res) => {
        try {
            const aPublisher = await Publisher.findById(req.params.id);
            res.status(200).json(aPublisher);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updatePublisher: async(req,res) => {
        try {
            const aPublisher = await Publisher.findById(req.params.id);
            await aPublisher.updateOne({ $set: req.body });
            res.status(200).json("Updated Publisher successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletePublisher: async(req,res) => {
        try {
            console.log("delete Publisher");
            console.log(req.params.id);
            await Publisher.findByIdAndDelete(req.params.id);
            res.status(200).json("Xoa sach thanh cong!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = publisherController;