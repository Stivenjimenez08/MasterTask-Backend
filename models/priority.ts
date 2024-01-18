import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const prioritys = db.define('priority',{
    title: {
        type: DataTypes.STRING
    }
})

export default prioritys