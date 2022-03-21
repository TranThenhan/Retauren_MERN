import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        firstName :{type: String, required: true },
        lastName :{type: String, required: true},
        email:{type: String, required: true, unique:true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default:false, required: true},
        adrressNB: {type:Number},
        addresST: {type: String},
        ville: {type: String},
        codePostal:{type: Number}

    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

export default User;
export {userSchema}