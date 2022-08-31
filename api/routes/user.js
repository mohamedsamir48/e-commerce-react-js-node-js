const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const {admin, authorization, verifyToken} = require('./verifyToken')
const dotenv = require("dotenv")
dotenv.config()

router.get('/:id', async(req, res) =>{
    const user = await User.findById(req.params.id);
    const {password, ...others} = user._doc
    res.status(200).json(others);
})

router.put('/:id', authorization, async(req, res) =>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS).toString()
       try{

           const updatedUser = await User.findByIdAndUpdate(req.params.id,{
               $set:req.body
            },{new:true})
            const {password, ...others} = updatedUser._doc;
            res.status(200).json(others)
        }catch(err){res.status(500).json(err)}
    }
    })

router.delete('/:id', authorization,async(req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id)
    !user && res.status(402).json("the user has been deleted")
    res.status(200).json(`${user.username} has been deleted`)
} )

router.get('/get/all', admin,async (req,res)=>{
    const users = await User.find();
    res.status(200).json(users)
})


module.exports = router;