const FollowBook = require('../models/follow')

const followBookController = {
    getAllFollowBook : async(req,res) => {
        try {
            const allFollowBook = await FollowBook.find();
            res.status(200).json(allFollowBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAFollowBook: async(req,res) => {
        try {
            const aFollowBook = await FollowBook.findById(req.params.id);
            res.status(200).json(aFollowBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = followBookController;