import mongoose from "mongoose";
import { productShema } from "./productModel.js";
import { userSchema } from "./userModel.js";

const commandSchema = new mongoose.Schema(
    {
        user: userSchema,
        listProducts: productShema,
        valida:{type: Boolean}
    },
    {
        timestamps: true
    }
)


const Command = mongoose.model('Command', commandSchema)
export default Command;