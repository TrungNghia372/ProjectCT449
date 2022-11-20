const newsController = require("../controllers/newsController");

const router = require("express").Router();

//Add News
router.post('/',newsController.addNews);
//Get all News
router.get('/',newsController.getAllNews);
//Get a News
router.get('/:id',newsController.getANews);
//Update a News
router.put('/:id',newsController.updateNews);
//Delete a News
router.delete('/:id',newsController.deleteNews);

module.exports = router;