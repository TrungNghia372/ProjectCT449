const publisherController = require('../controllers/publisherController');
const router = require("express").Router();

//Add publisher
router.post('/addpublisher',publisherController.addPublisher);
//Get all publisher
router.get('/getallpublishers',publisherController.getAllPublisher);

router.get('/:id',publisherController.getAPublisher);

//Update publisher
router.put('/:id',publisherController.updatePublisher) ;

// Delete publisher
router.delete('/deletepublisher/:id',publisherController.deletePublisher);

module.exports = router;