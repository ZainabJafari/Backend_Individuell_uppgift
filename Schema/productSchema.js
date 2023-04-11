const mongoose = require('mongoose')
const { Schema } = mongoose;


const productSchema = new Schema({
    name:        {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    imageURL:    {type: String, required: true},
    user:        {type: Schema.Types.ObjectId, ref: 'User' , required: true},
    order:       { type: Number, default: 0}
}, { timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;