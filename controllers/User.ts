import {Response, Request} from 'express'
import bcrypt from 'bcryptjs'
import user from '../models/user'

export const createUser = async(req: Request, res: Response) =>{

    let { names, lastName, userName, email, password} = req.body

    const valemail = await user.findOne({
        where: {
            email
        }
    })
    if(valemail){
        return res.status(200).json({
            msg: `el correo ${email} ya ese encuentra registrado`
        }) 
    }
    
    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)

    const users = await user.create({ names, lastName, userName, email, password})

    res.status(200).json({
        msg: `Registro exitoso`,
        users
    }) 
}

export const userById = async ( req: Request, res: Response ) =>{

    // const {id} = req.params
    const id=1
    const users = await user.findByPk(id)

    if (users) {
        res.status(200).json({
            users
        })
    } else {
        res.status(400).json({
            msg: 'El usuario no existe'
        })
    }
}

export const updateUser= async(req: Request, res: Response)=>{
 
    let { names, lastName, id, userName, email, password, photo} = req.body;

    const salt = bcrypt.genSaltSync()
    password = bcrypt.hashSync(password, salt)
    console.log(password)
    const users= await user.update({ names, lastName, userName, email, password, photo},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `Actualizado satisfactoriamente`,
        users
    }) 
}