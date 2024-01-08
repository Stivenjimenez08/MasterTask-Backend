import express, {Application} from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import db from '../db/connection';
import userRoutes from '../routes/User'
dotenv.config();

class Server{

    private app: Application;
    private port: string| undefined;

    private apiPaths ={
        User: '/api/user'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.dbConnection();
        this.middlewares();
        this.routes(); 
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log("database online");
        }
        catch(error){
            console.log(error);
        }
    }

    middlewares(){
        //lectura y parseo del body (conversion)
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.apiPaths.User, userRoutes)
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo el puerto: ${this.port}`);
        })
    }
}

export default Server;