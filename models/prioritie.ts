import {  DataTypes } from 'sequelize';
import db from '../db/connection';

const priorities = db.define('prioritie',{
    title: {
        type: DataTypes.STRING
    }
})

export default priorities