const Product = require('../Schema/productSchema');

exports.createNewProduct = (req, res) =>{

    const {name, description, price, imageURL} = req.body;
 
    if(!name || !description || !price || !imageURL){
        res.status(400).json({
            message: 'You need to enter all the fileds'
        })
        return
    }


    Product.create({name, description, price,  })
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

exports.getProductById = async (req, res) =>{

    const product = await Product.findById(req.params.id)
    
    if(!product){
        return res.status(404).json({message: 'Could not find the product'})
    }

    res.status(200).json(product)
    
}

exports.uppdateProduct = async (req, res) =>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    if(!product){
      return res.status(404).json({message: 'Could not find the product'})
    }

    res.status(200).json(product)

}




exports.deleteProduct = (req, res) =>{

    Product.findByIdAndDelete(req.params.id)
    .then(product => {
        if(!product){
           return res.status(404).json({message: 'Could not find the product'})
        }
        res.status(200).json({id: product._id})
    })
    .catch(err => {
        res.status(500).json({message: 'Something went wrong when deleting the product' ,
        err: err.message})
        
    })
}






// exports.deleteProcuct = (req, res)=> {

//    Product.findByIdAndDelete(req.params.id)
//      .then(product =>{
//       if(!product){
//         return res.status(404).json({message: 'Could not find the product'})
//     }

//    res.status(200).json({id: product._id})

// })
