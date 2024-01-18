import {Response, Request} from 'express'
import notes from '../models/note'
import states from '../models/state'
import prioritys from '../models/priority'

export const createNote = async(req: Request, res: Response) =>{

    let { title, description, expirationDate, idPriority,  idState, idUser} = req.body

    const note = await notes.create({title, description, expirationDate, idPriority,  idState, idUser})

    res.status(200).json({
        msg: `note successfully created`,
        note
    }) 
}

export const cosultNotes = async(req: Request, res: Response)=> {

    const {idUser}=req.params
    
    const note= await notes.findAll({
        attributes:['title', 'description', 'expirationDate', 'idPriority', 'idState'],
        include:[{
            model: states,
            attributes:['title']
        },
        {
            model: prioritys,
            attributes:['title']
        }],
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
        attributes:['title', 'description', 'expirationDate', 'idPriority', 'idState'],
        include:[{
            model: states,
            attributes:['title']
        },
        {
            model: prioritys,
            attributes:['title']
        }],
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
 
    let {id, title, description, expirationDate, idPriority,  idState} = req.body;

    const note= await notes.update({ title, description, expirationDate, idPriority,  idState},{
        where:{
            id
        }
    })
     
    res.status(200).json({
        note,
        msg: `correctly updated note`
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
        msg: `note correctly deleted`
    }) 
}