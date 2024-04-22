const followBookController = require('../controllers/followBookController');
const router = require("express").Router();

router.get('/getallfollowbook',followBookController.getAllFollowBook);
router.get('/:id',followBookController.getAFollowBook);


module.exports = router;