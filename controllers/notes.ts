import {Response, Request} from 'express'
import notes from '../models/note'
import user from '../models/user'

export const createNote = async(req: Request, res: Response) =>{

    let { title, description, priority, expirationDate, state, idUser} = req.body

    const note = await notes.create({title, description, priority, expirationDate, state, idUser})

    res.status(200).json({
        msg: `Nota creada correctamente`
    }) 
}

export const cosultNotes = async(req: Request, res: Response)=> {

    const {id}=req.params
    
    const note= await notes.findAll({
        attributes:['title', 'description', 'priority', 'expirationDate', 'state', 'idUser'],
        include:[{
            model: user,
            attributes: ['name']
        }],
        where:{
            id // este id sera el del usuario, para traer todas las notas asociadas a su cuenta
        }
    })

    res.status(200).json({
        msg: " notes ",
        note
    })
}

export const updateNote= async(req: Request, res: Response)=>{
 
    let {id, userName, email, password, photo} = req.body;

    const users= await user.update({ userName, email, password, photo},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `Actualizado satisfactoriamente`
    }) 
}