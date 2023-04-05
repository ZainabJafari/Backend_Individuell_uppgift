const Product = require('../Schema/productSchema');

exports.createNewProduct = (req, res) =>{

    const {name, description, price, imageURL} = req.body;
 
    if(!name || !description || !price || !imageURL){
        res.status(400).json({
            message: 'You need to enter all the fileds'
        })
        return
    }


    Product.create({name, description, price, imageURL})
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err =>{
        res.status(500).json({
         message: 'somthing went wrong when creating the product',
         err: err.message
        })
        return
    })
}

exports.getAllProduct = (req, res) =>{
    Product.find()
    .then(products => {
        res.status(200).json(products)
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Cannot find the prodocts'
        })
    })
}

