const router = require('express').Router();

const authController = require('../controllers/authController');
const middlewareHandle = require('../middlewares/middleware');

// Register
router.post('/register',authController.registerUser);
// Login
router.post('/login',authController.loginUser);
// Logout
router.get('/logout',middlewareHandle.verifyToken,authController.logoutUser);
module.exports = router;