const Book = require('../models/book')

const productController = {
    getProduct : async(req,res) => {
        try {
            const listBook = await Book.find({});
            const listProduct = listProduct.concat(listBook);
         
            //   console.log(listProduct);
            res.status(200).json(listBook);
        } catch (error) {
            console.log(error);
        }
    }
}   
module.exports = productController;
