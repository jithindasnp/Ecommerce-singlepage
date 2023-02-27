const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/ecommerceDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const addProductSchema=new Schema({
    productName:{type:String,required:true},
    productImg:{type:String,required:true},
    price:{type:String,required:true},
    stock:{type:String,required:true},
    
})
let productList=mongoose.model('productList',addProductSchema)
module.exports=productList