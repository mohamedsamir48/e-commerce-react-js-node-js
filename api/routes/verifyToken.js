
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const headerToken = req.headers.token;
    const token = headerToken.split(' ')[1]
    if(headerToken){
        jwt.verify(token,process.env.JWT_SEC, (err, user) =>{
            if(err) res.status(401).json("Your token is invalid")
            req.user = user;
            next();
            
        })
    }else{
        res.status(401).json("You are not authenticated")
    }
}
const authorization = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(402).json("you are not allowed to do that !!")
        }
    })
}
const admin = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(401).json("You are not admin")
        }
    })
}

module.exports = {verifyToken, authorization, admin}