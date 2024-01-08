import {  DataTypes } from 'sequelize';
import db from '../db/connection';
import user from './user'

const labels = db.define('label',{
    
    title: {
        type: DataTypes.STRING
    },
    color:{
        type: DataTypes.STRING
    },
    idUser:{
        type: DataTypes.BIGINT
    }
})

labels.belongsTo( user,{

    foreignKey: 'idUser'
})

export default labels