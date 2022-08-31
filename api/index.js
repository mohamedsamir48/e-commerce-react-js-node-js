const express = require('express');
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const dotenv = require('dotenv');
var cors = require('cors') 
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_CONNECT_URL)
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{
    console.log(err);
})

app.listen(5000,()=>{
    console.log("server is running")
})

app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/carts', cartRoute)
