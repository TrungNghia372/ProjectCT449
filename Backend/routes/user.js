const userController = require('../controllers/userController');
const middlewareHandle = require('../middlewares/middleware');

const router = require('express').Router();

// Get all users
router.get("/",middlewareHandle.verifyToken, userController.getAllUsers);
// Delete user
router.delete("/:id",middlewareHandle.verifyTokenAndAdmin,userController.deleteUser);

module.exports = router;
