const router = require('express').Router()
const {createOrder, getAllOrder} = require('../Model/orderModel')
const auth = require('../authentication/auth')


router.post('/', auth.verfyToken, createOrder)
router.get('/', getAllOrder )

module.exports = router;
