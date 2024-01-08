import { Sequelize } from 'sequelize';

const db = new Sequelize('notesapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  export default db;