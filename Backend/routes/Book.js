const bookController = require("../controllers/BookController");
const { route } = require("./User");
const router = require("express").Router();

//Add book
router.post('/addbook',bookController.addBook);
//Get all book
router.get('/getallbooks',bookController.getAllBook);

router.get('/:id',bookController.getABook);
//Update a fish
router.put('/:id',bookController.updateBook);
//Delete a fish
router.delete('/deletebook/:id',bookController.deleteBook);


// Home
router.get('/home/list',bookController.getListBookHome);
// Fish page
router.get('/product/list',bookController.getAllBook);

// Detail Fish
router.get('/detailBook/detail',bookController.getBookDetail);

// Suggest Fish
router.get('/suggest/suggestBook',bookController.getSuggestBook);

// popular fish
router.get('/popular/list',bookController.getPopularBook);

// page
router.get('/product/page',bookController.getListBookPage);
module.exports = router;