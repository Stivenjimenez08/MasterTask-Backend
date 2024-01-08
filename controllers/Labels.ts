import {Response, Request} from 'express'
import label from '../models/label'
import user from '../models/user'

export const createLabel= async(req: Request, res: Response) =>{

    let { title, color,  idUser} = req.body

    const labels = await label.create({title, color, idUser})

    res.status(200).json({
        msg: `Etiqueta creada correctamente`,
        labels
    }) 
}

export const cosultLabel = async(req: Request, res: Response)=> {

    const {id}=req.params//id usuario
    
    const labels= await label.findAll({
        attributes:['title', 'color', 'idUser'],
        include:[{
            model: user,
            attributes: ['name']
        }],
        where:{
            id // este id sera el del usuario, para traer todas las notas asociadas a su cuenta
        }
    })

    res.status(200).json({
        msg: " etiquetas ",
        labels
    })
}

export const updateLabel= async(req: Request, res: Response)=>{
 
    let {id, title, color} = req.body;

    const labels= await label.update({ title, color },{
        where:{
            id
        }
    })
     
    res.status(200).json({
        msg: `Actualizado satisfactoriamente`
    }) 
}