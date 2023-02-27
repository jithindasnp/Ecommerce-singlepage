const jwt = require('jsonwebtoken')


//Middleware for jwt authentication
module.exports = (req, res, next) => {
    try {
        //token from authorization
        console.log(req.body);
        const auth = req.headers.authorization
        const token = auth.split(' ')[1]
        //decoding token+bearer
        const decodedToken = jwt.verify(token, 'secret_2255')
        req.userData = { loginId: decodedToken.loginId }
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Authentication failed !!! please login",
            loginStatus: false
        })
    }
}