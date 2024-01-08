import {  DataTypes } from 'sequelize';
import db from '../db/connection';
import user from './user'

const notes = db.define('note',{
    
    title: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.STRING
    },
    expirationDate:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
    idUser:{
        type: DataTypes.BIGINT
    }
})

notes.belongsTo( user, {
    foreignKey: 'idUser'
})

export default notes