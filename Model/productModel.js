const Product = require('../Schema/productSchema');

exports.createNewProduct = (req, res) =>{

    const {name, description, price, imageURL, user} = req.body;
 
    if(!name || !description || !price || !imageURL || !user){
        res.status(400).json({
            message: 'You need to enter all the fileds'
        })
        return
    }


    Product.create({name, description, price, imageURL, user })
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

exports.getAllProduct = async (req, res) =>{

    try {
        const products = await Product.find().populate('user')
        res.status(200).json(products)
        
    } catch (err) {
        res.status(500).json({message: 'Something went wrong when getting the products'})
    }
}


exports.getProductById = async (req, res) =>{

    const product = await Product.findById(req.params.id).populate('user')
    
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

exports.getProductByUser = async (req, res) => {
    const prodocts = await Product.find({user: req.params.id})

    res.status(200).json(prodocts)
}

exports.antalOrder = async (req, res) => {
    const prodoct = await Product.findById(req.params.id)
    prodoct.order++
    await prodoct.save()
    res.status(200).json(prodoct)
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
