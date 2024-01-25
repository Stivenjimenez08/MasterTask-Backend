import { Sequelize } from 'sequelize';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config';

const db = new Sequelize( DB_DATABASE , DB_USER, DB_PASSWORD , {
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect: 'mysql' 
  });

  export default db;