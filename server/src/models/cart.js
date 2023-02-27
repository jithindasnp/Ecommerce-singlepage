const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/ecommerceDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema
const addToCartSchema = new Schema({
    productId: { type: Schema.Types.ObjectId,ref:"productList", required: true }
})
let cart = mongoose.model('cart', addToCartSchema)
module.exports = cart