import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const user = db.define('user',{
    
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

export default user