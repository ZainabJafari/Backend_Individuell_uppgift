const Product = require('../Schema/productSchema');

const mongoose = require('mongoose');

const addProduct = (req, res) =>{

    const {name, description, price, imgURI} = req.body;
 
    if(!name || !description || !price || imgURI){
        res.staus().json({
            message: 'You need to enter all the fileds'
        })
        return
    }
    // .then(product)
    // res.staus().json()

}