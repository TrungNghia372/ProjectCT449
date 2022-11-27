const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.post('/add/product',cartController.addToCart);

router.get('/get/product',cartController.getCartProduct);

router.delete('/delete/product',cartController.deleteProduct);

router.get('/count/product',cartController.countQuantityItem);

router.delete('/pay/product',cartController.pay);
module.exports = router;
