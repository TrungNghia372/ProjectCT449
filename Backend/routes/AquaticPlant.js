const aquaticPlantController = require('../controllers/aquaticPlantController');

const router = require('express').Router();

// Add aquaticPlant
router.post('/',aquaticPlantController.addAquaticPlant);
// Get all aquaticPlant
router.get('/',aquaticPlantController.getAllAquaticPlant);
// Get an aquaticPlant
router.get('/:id',aquaticPlantController.getAnAquaticPlant);
// Update a aquaticPlant
router.put('/:id',aquaticPlantController.updateAquaticPlant);
// Delete a aquaticPlant
router.delete('/:id',aquaticPlantController.deleteAquaticPlant);

// Home
router.get('/home/list',aquaticPlantController.getListAquaticPlantHome);

// Detail
router.get('/detailAquaticPlant/detail',aquaticPlantController.getDetail);

// Suggest
router.get('/suggest/suggestAquaticPlant',aquaticPlantController.getSuggestAquaticPlant);

module.exports = router;