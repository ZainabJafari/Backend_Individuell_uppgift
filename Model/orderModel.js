const Order = require('../Schema/orderSchema')

exports.createOrder = async (req, res)=> {
    const { orderRader } = req.body

    if(!orderRader){
        return res.status(400).json({message: 'yuor need to fill all the fields'})
    }

    const order = await Order.create({orderRader, user: req.userId})

    if(!order){
        return res.status(500).json({message: 'something went wrong '})

    }

    res.status(200).json(order)
}


exports.getAllOrder = async (req, res) => {

    const orders = await Order.find(req.params.userId)

    if(!orders){
        return res.status(404).json({message: 'Could not fint the orders'})
    }

    res.status(200).json(orders)
}