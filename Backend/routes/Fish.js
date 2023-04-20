const fishController = require("../controllers/fishcontroller");
const { route } = require("./User");
const router = require("express").Router();

//Add fish
router.post('/',fishController.addFish);
//Get all fish
router.get('/',fishController.getAllFish);
//Get a fish
router.get('/:id',fishController.getAFish);
//Update a fish
router.put('/:id',fishController.updateFish);
//Delete a fish
router.delete('/:id',fishController.deleteFish);


// Home
router.get('/home/list',fishController.getListFishHome);
// Fish page
router.get('/product/list',fishController.getAllFish);

// Detail Fish
router.get('/detailFish/detail',fishController.getFishDetail);

// Suggest Fish
router.get('/suggest/suggestFish',fishController.getSuggestFish);

// popular fish
router.get('/popular/list',fishController.getPopularFish);

// page
router.get('/product/page',fishController.getListFishPage);
module.exports = router;