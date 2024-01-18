import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const states = db.define('state',{ 
    title: {
        type: DataTypes.STRING
    }
})

export default states