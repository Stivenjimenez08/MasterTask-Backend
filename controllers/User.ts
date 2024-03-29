import {Response, Request} from 'express'
import bcrypt from 'bcryptjs'
import user from '../models/user'

export const createUser = async(req: Request, res: Response) =>{

    
    let { names, lastName, userName, email, password } = req.body

    const valemail = await user.findOne({
        where: {
            email
        }
    })
    if(valemail){
        return res.status(200).json({
            msg: `The email entered is not available`
        }) 
    }
    
    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users = await user.create({ names, lastName, userName, email, password})

    res.status(200).json({
        msg: `successful registration`,
        users
    }) 
}

export const userById = async ( req: Request, res: Response ) =>{

    const {id} = req.params
    
    const users = await user.findByPk(id)

    if (users) {
        res.status(200).json({
            users
        })
    } else {
        res.status(400).json({
            msg: 'user not found'
        })
    }
}

export const updateUser= async(req: Request, res: Response)=>{
 
    let { names, lastName, id, userName, email, photo} = req.body;

    const users= await user.update({ names, lastName, userName, email, photo},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `User data updated correctly`,
        users
    }) 
}

export const updatePassword= async(req: Request, res: Response)=>{
 
    let { id, password } = req.body;

    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users= await user.update({ password},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `password updated correctly`,
        users
    }) 
}