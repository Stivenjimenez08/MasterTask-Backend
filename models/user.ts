import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const users = db.define('user',{
    
    names: {
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    userName: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    }
})

export default users