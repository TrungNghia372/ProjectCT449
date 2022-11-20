const fishPedestalController = require('../controllers/fishPedestalController');

const router = require('express').Router();

// Add fishPedestal
router.post('/',fishPedestalController.addFishPedestal);
// Get all fishPedestal
router.get('/',fishPedestalController.getAllFishPedestal);
// Get a fishPedestal
router.get('/:id',fishPedestalController.getAFishPedestal);
// Update a fishPedestal
router.put('/:id',fishPedestalController.updateFishPedestal);
// Delete a fishPedestal
router.delete('/:id',fishPedestalController.deleteFishPedestal);

// Home
router.get('/home/list',fishPedestalController.getListFishPedestal);

// Detail 
router.get('/detailFishpedestal/detail',fishPedestalController.getFishPedestalDetail);

// Suggest
router.get('/suggest/suggestFishpedestal',fishPedestalController.getSuggestFishPedestal);


module.exports = router;