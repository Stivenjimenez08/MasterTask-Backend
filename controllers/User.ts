import {Response, Request} from 'express'
import user from '../models/user'

export const userById = async ( req: Request, res: Response ) =>{

    const {id} = req.params

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

export const createUser = async(req: Request, res: Response) =>{

    let { userName, email, password} = req.body

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
    
    // const salt = bcrypt.genSaltSync()
    // password = bcrypt.hashSync(password, salt)

    const users = await user.create({userName, email, password})

    res.status(200).json({
        msg: `Registro exitoso`
    }) 
}

export const updateUser= async(req: Request, res: Response)=>{
 
    let {id, userName, email, password, photo} = req.body;

    // const salt = bcrypt.genSaltSync()
    // password = bcrypt.hashSync(password, salt)

    const users= await user.update({ userName, email, password, photo},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `Actualizado satisfactoriamente`
    }) 
}