import express from 'express';
import cors from 'cors';
import data from './data.js' // non utilisé ici
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js';


dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');

}).catch((err)=>{
    console.log(err.message)
})
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)


app.use((err, req, res)=>{ // pas de next ici
    res.status(500).send({message: err.message})
})


const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log(`server at http://localhost:${port}`)
})