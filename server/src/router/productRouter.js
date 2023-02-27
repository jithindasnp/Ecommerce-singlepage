const express = require('express')
const authCheck = require('../middleware/authCheck')
const productList = require('../models/product')
const productRouter = express.Router()

//To add products(ADMIN have access to do this)
productRouter.post('/add',authCheck, async (req, res) => {

    const { productName, productImg, price, stock } = req.body

    try {
        const add = await productList.create({  productName, productImg, price, stock})
        if (!add) {
            return res.status(400).json({ message: "something went wrong!" })
        } else {
            return res.status(200).json({ message: "product added successfully" })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ ERROR: error })
    }

})

//To view the products in the bestdeal
productRouter.get('/view',  async (req, res) => {

    try {
        const view = await productList.find()
        if (!view) {
            return res.status(400).json({ message: "something went wrong!" })
        } else {
            return res.status(200).json(view)
        }
    } catch (error) {
        return res.status(400).json({ ERROR: error })
    }

})


module.exports=productRouter