import express from 'express';
import data from './data.js'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/api/products', function(req,res){
    res.send(data.products)
})

const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log(`server at http://localhost:${port}`)
})