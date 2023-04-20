const product = require('../controllers/productController');
const router = require("express").Router();

router.get('/products/page', product.getProduct);

module.exports = router;