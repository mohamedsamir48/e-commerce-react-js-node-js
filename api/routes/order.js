const { verifyToken, admin,authorization } = require("./verifyToken");
const Order = require('../models/Order')
const router = require("express").Router();

router.get('/', verifyToken, async (req, res)=>{
    try{
        const order = await Order.find({userId : req.user.id})
        res.status(200).json(order)
    }catch(err){
        res.status(401).json(err)
    }
})

router.post('/', verifyToken, async(req, res) =>{
    try{
        const newOrder =  new Order({
            userId:req.user.id,
            products:req.body.products,
            amount:req.body.amount,
            address: req.body.address
        })
        saved = await newOrder.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(400).json(err)
    }

})


//get all for admin handle
router.get('/all', admin, async(req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders)
    }catch(err){res.status(401).json(err)}
})

//delete function
router.delete('/:id/:orderId', authorization, async (req, res)=>{
    
    try{
        const order = await Order.findByIdAndDelete(req.params.orderId)
        res.status(202).json(`${order.id} has been deleted`)
    }catch(err){
        res.status(401).json(err)
    }
})

router.put('/:id/:orderId', authorization, async (req, res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId,
            {
                $set:req.body
            },{new:true})
            res.status(200).json(updatedOrder)
            
    }catch(err) {res.status(401).json(err)}
})






module.exports = router;