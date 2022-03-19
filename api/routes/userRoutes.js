import express from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js'
import expressAsyncHandler from 'express-async-handler'

const userRouter = express.Router()

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req,res)=>{
        const user = await User.findOne({email: req.body.email})
        console.log(req.body)
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    _id: user._id,
                    firstName :user.firstName,
                    lastName :user.lastName,
                    email:user.email,
                    isAdmin: user.isAdmin,
                    adrressNB: user.adrressNB,
                    addresST: user.addresST,
                    ville: user.ville,
                    codePostal:user.codePostal,
                    token: generateToken(user)
                })
                return
            }
        }
        res.status(401).send({message: 'Invalide emaill or password'})
    })
)

export default userRouter