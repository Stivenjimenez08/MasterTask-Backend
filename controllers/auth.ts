import {Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import User from '../models/user'
import generateJWT from '../helpers/generate-jwt';
import * as nodemailer from 'nodemailer'

export const login= async(req: Request, res: Response) =>{

    const { email, password }= req.body
    
    try {
    
     const login = await User.findOne({
        where: {
            email
        }
     })
     if (!login){
        return res.status(400).json({
            msg: 'The user is not registered'
        })
     }

     const validpassword = bcrypt.compareSync( password ,login.dataValues.password)
    
     if (!validpassword){
        return res.status(400).json({
            msg: 'Invalid login or password'
        })
     }

     const token = await generateJWT(login.dataValues.id)
     console.log('token',token)

     return res.status(200).json({
        login,
        token
     })

    } catch (error) {
        console.log(error)
    }
}

export const logout = (req: Request, res: Response) => {
    return res.status(200).json({
        msg:"El usuario cerro sesion correctamente"
    })
}

export const validateToken = async(req: Request, res: Response) => {
    
    const {id} = req.body
    console.log('id', id)

    const user = await User.findByPk(id)
    
    if(!user){
        return res.status(200).json({
            user,
            msg: 'user not found'
        })
    }

    return res.status(200).json({
        user, 
        msg:'Token validado'
    })
}

export const recoveryPassword = async(req: Request, res: Response)=>{

    const { email } = req.body
    
        const users = await User.findOne({
            where: {email}
        })

        console.log(users?.dataValues)

        if(!users){
            return res.status(200).json({
                msg: 'Email not detected'
            })
        }else{
            res.status(200).json({
                msg: 'mail sent correctly'
            })
        }

        const link = `http://localhost:5173/auth/Recoverypassword/${users?.dataValues.id}`

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'stivenjimenez37@gmail.com',
              pass: 'bjwj qdyr zvsu vsjp'
            }
          });
          
          var mailOptions = {
            from: 'stivenjimenez37@gmail.com',
            to: users?.dataValues.email,
            subject: 'Recovery Your Password',
            html: `<h2>Dear ${users?.dataValues.email} </h2>
            <h3>use the following link to recover your password ${link}</h3> `
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
}
