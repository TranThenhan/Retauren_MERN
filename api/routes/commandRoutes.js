import Command from "../models/commandModel.js";
import express from 'express'
import { generateToken } from '../utils.js'
import expressAsyncHandler from 'express-async-handler'

const commandRouter = express.Router()

commandRouter.post(
    '/confirm',
    expressAsyncHandler(async(req,res)=>{
        const newCommand = new Command({
            user: req.body.clientData,
            listProducts: req.body.parsedCartData,

        })
        const command = await newCommand.save()
        res.send({
            _id: command._id,
            clientData: command.user,
            parsedCartData: command.listProducts,
            
            token: generateToken(command)
        })
    }
    
))

export default commandRouter;