const router = require('express').Router()
const productModel = require('../Model/productModel')


router.post('/', productModel.createNewProduct)
router.get('/', productModel.getAllProduct)
router.get('/:id', productModel.getProductById)
router.put('/:id', productModel.uppdateProduct)
router.delete('/:id', productModel.deleteProduct)


module.exports = router;

