const router = require('express').Router()
const productModel = require('../Model/productModel')


router.post('/', productModel.createNewProduct)
router.get('/', productModel.getAllProduct)


module.exports = router;

