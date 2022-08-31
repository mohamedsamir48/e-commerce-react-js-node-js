const router = require('express').Router();
const CryptoJS = require("crypto-js")
const User = require("../models/User");
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken")
dotenv.config();
router.post('/register', async(req, res) =>{
    
    var encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS);
    const newUser = new User({
        username:req.body.username,
        email: req.body.email,
        password:encryptedPassword,
        isAdmin: req.body.isAdmin
    })
    try{
        const savedUser = await newUser.save();
        const {password, ...others} = savedUser._doc;
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.post('/login', async (req, res)=>{
   try{
    const user = await User.findOne({email:req.body.email})
    !user && res.status(500).json("Wrong email")
    hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_PASS);
    originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password && res.status(401).json('wrong password');
    const accessToken = jwt.sign(
        {
            id:user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
    )
    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken})
   }catch(err){
    console.log(err)
   }
})
module.exports = router;