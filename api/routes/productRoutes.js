import  express from "express";
import Product from "../models/productModel.js";

const productRouter = express.Router()
productRouter.get('/', async (_req, res)=> {
    const products = await Product.find() // try/catch nécessaire pour les async / await
    res.send(products)
})

export default productRouter