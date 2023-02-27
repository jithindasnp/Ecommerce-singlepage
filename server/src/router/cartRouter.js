const express = require('express')
const authCheck = require('../middleware/authCheck')
const cart = require('../models/cart')
const productList = require('../models/product')
const cartRouter = express.Router()



//add items to cart
cartRouter.post('/add', authCheck, async (req, res) => {
    const { id } = req.body
    try {
        const item = await productList.findById({ _id: id })
        let newStock = item.stock - 1
        if (!item) {
            return res.status(400).json({ message: "data fetching error!" })
        } else {
            const add = await cart.create({ productId: id })

            const stockUpdate = await productList.findByIdAndUpdate({ _id: id }, { stock: newStock })

            if (!add) {
                return res.status(400).json({ message: "add to cart error!" })
            } else {
                if (!stockUpdate) {
                    return res.status(400).send({ message: "stock update error!" })
                } else {
                    return res.status(200).send({ message: "stock updated and added to cart" })
                }
            }


        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error })
    }

})

// view items in cart
cartRouter.get('/view', authCheck,async (req, res) => {

    try {
        const view = await cart.aggregate([
            {
                '$lookup': {
                    'from': 'productlists',
                    'localField': 'productId',
                    'foreignField': '_id',
                    'as': 'cartData'
                }
            },
            {
                '$unwind': '$cartData'

            },
            {
                '$group': {
                    '_id': '$_id',
                    'productName': { '$first': '$cartData.productName' },
                    'price': { '$first': '$cartData.price' },
                }
            }
        ])
        if (!view) {
            return res.status(400).json({ message: "something went wrong!" })
        } else {
            return res.status(200).json(view)
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ ERROR: error })
    }

})

//to delete item
cartRouter.post('/delete', authCheck, async (req, res) => {

    const {id,product} = req.body

    try {
        const productData = await productList.findOne({ productName: product })
        let newStock = Math.floor(productData.stock) + 1
        if (!productData) {
            return res.status(400).json({ message: "data fetching error!" })
        } else {            

            const stockUpdate = await productList.findOneAndUpdate({productName: product  }, { stock: newStock })

            const del = await cart.findByIdAndDelete({ _id: id })

            if (!stockUpdate) {
                return res.status(400).json({ message: "something went wrong!" })
            } else {
                if (!del) {
                    return res.status(400).send({ message: "stock update error!" })
                } else {
                    return res.status(200).send({ message: "stock updated and deleted successfully" })
                }
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ ERROR: error })
    }
})

module.exports = cartRouter