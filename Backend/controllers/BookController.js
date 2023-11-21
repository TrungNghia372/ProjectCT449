const Book = require('../models/book')

const bookController = {
    // Add book
    addBook : async(req,res) => {
        
        try {
            console.log("Add book");
            console.log(req.body);
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get all Book
    getAllBook : async(req,res) => {
        try {
            console.log("get all book");
            var obj = {};
            if (req.query.type) obj={type: req.query.type};
            console.log(req.url)
            const books = await Book.find(obj);
            // const book = await Book.find({});
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get a fish
    getABook: async(req,res) => {
        try {
            const aBook = await Book.findById(req.params.id);
            res.status(200).json(aBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Update fish
    updateBook: async(req,res) => {
        try {
            const aBook = await Book.findById(req.params.id);
            await aBook.updateOne({ $set: req.body });
            res.status(200).json("Updated Book successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Delete fish
    deleteBook: async(req,res) => {
        try {
            console.log("delete Book");
            console.log(req.params.id);
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Xoa sach thanh cong!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    
    getListBookHome: async(req,res) => {
        try {
            const listBook = await Book.find({}).limit(5);
            res.status(200).json(listBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get FishDetail
    getBookDetail: async(req,res) => {
        try {
            const result = await Book.findOne({_id:req.query.id});
            res.status(200).json(result);
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get list popular fish
    getPopularBook: async(req,res) => {
        try {
            const listBookPopular = await Book.find({popularType: true});
            res.status(200).json(listBookPopular);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Get Suggest Fish
    getSuggestBook: async(req,res) => {
        try {
            const obj = await Book.findOne({_id: req.query.id}).select("-_id type");
            // console.log(obj.habitat)
            const result = await Book.find({type: obj.type}).limit(6).skip(Math.floor(Math.random()*5));
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },

   
    getListBookPage: async(req,res) => {
        try {

            console.log('da in');

            // const pageSize   = req.query.pageSize;
            // const pageNumber = req.query.pageNumber;

            const listBook = await Book.find({});
            // const listFishPedestal = await FishPedestal.find({});
            // const listAquaticPlant = await AquaticPlant.find({});
            // const listProduct      = await listFish.concat(listAquaticPlant, listFishPedestal);    

            // var i = ((pageNumber-1)*pageSize);
            // var j = parseInt(pageSize)+i;
            // var k = 0 ;
    
            // var result = [];
            // for (i ; i <= j; i++){
            //     k++;
            //     result[k] = listProduct[i];
            // }


            // console.log(result);

            res.status(200).json(listBook);
            // res.status(200).json({result: result,totalRecord: listProduct.length});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = bookController;