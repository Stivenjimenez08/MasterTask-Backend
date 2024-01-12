import jwt from 'jsonwebtoken'

const generateJWT = (id=' ')=>{

    return new Promise((resolve, reject)=>{

        const payload = {id};

        jwt.sign(payload, process.env.PRIVATEKEY || ' ', {

            expiresIn: "1h"
        },(err, token)=>{

            if(err){
                reject('No se pudo generar el token')
            }else{
                resolve(token)
            }
        })
    })
    
}

export default generateJWT