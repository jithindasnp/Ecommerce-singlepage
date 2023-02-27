const express = require('express')
const loginRouter = require('./src/router/loginRouter')
const registerRouter = require('./src/router/registerRouter')
const productRouter = require('./src/router/productRouter')
const cartRouter = require('./src/router/cartRouter')

const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("/public"))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

app.use('/api/login',loginRouter)
app.use('/api/register',registerRouter)
app.use('/api/cart',cartRouter)
app.use('/api/product',productRouter)



app.listen(3001,()=>{
    console.log("Server started at port 3001");
})