import mongoose from "mongoose";


const productShema = new mongoose.Schema(
    {
        key: {type: Number},
        title:{type: String, required: true, unique:true},
        reference:{type: String, required: true, unique:true},
        image: {type: String, required: true},
        description: {type:String, required: true},
        prix: {type: String, required: true},
        quantity: {type: Number, required: true},
        category:{type: String, required: true}

    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productShema)
export default Product;