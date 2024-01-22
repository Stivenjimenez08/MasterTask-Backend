import {  DataTypes } from 'sequelize';
import db from '../db/connection';
import users from './user'
import states from './state';
import priorities from './prioritie';

const notes = db.define('note',{
    
    title: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    expirationDate:{
        type: DataTypes.STRING
    },
    idPriority:{
        type: DataTypes.BIGINT
    },
    idState:{
        type: DataTypes.BIGINT
    },
    idUser:{
        type: DataTypes.BIGINT
    }
})

notes.belongsTo( users, {
    foreignKey: 'idUser'
})
notes.belongsTo( states, {
    foreignKey: 'idState'
})
notes.belongsTo( priorities, {
    foreignKey: 'idPriority'
})

export default notes