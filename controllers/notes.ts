import {Response, Request} from 'express'
import notes from '../models/note'
import label from '../models/label'

export const createNote = async(req: Request, res: Response) =>{

    let { title, description, priority, expirationDate, state, idUser} = req.body

    const note = await notes.create({title, description, priority, expirationDate, state, idUser})

    res.status(200).json({
        msg: `Nota creada correctamente`,
        note
    }) 
}

export const cosultNotes = async(req: Request, res: Response)=> {

    const {idUser}=req.body
    
    const note= await notes.findAll({
        attributes:['title', 'description', 'priority', 'expirationDate', 'state'],
        where:{
            idUser 
        }
    })

    res.status(200).json({
        msg: " notes ",
        note
    })
}

export const cosultNotesById = async(req: Request, res: Response)=> {

    const {id}=req.params
    
    const note= await notes.findAll({
        attributes:['title', 'description', 'priority', 'expirationDate', 'state'],
        where:{
            id // este id sera el de la nota que deseamos ver
        }
    })

    res.status(200).json({
        msg: " notes ",
        note
    })
}

export const updateNote= async(req: Request, res: Response)=>{
 
    let {id, title, description, priority, expirationDate, state} = req.body;

    const note= await notes.update({ title, description, priority, expirationDate, state},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `Nota actualizada satisfactoriamente`
    }) 
}

export const deleteNote = async(req:Request, res:Response)=>{

    const {id}= req.params

    await notes.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        msg: `La nota se elimino satisfactoriamente`
    }) 
}