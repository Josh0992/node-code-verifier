import express, {Request, Response} from 'express';

//Swagger
import swaggerUi from "swagger-ui-express";

//Security
import cors from 'cors';
import helmet from 'helmet';

//TODO: HTTPS

//Root Router
import rootRouter from '../routes';
import mongoose from 'mongoose';

//create app Express
const server = express();

//*Swagger Config and route
//implements html SWIGGER
//http://localhost:8000/docs
server.use("/docs", swaggerUi.serve, swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json"
    }
  })
);

// * Define server to use "/api" to use rootRouter from 'index.ts' in routes
//from this point onover: http://localhost:8000/api/...
server.use('/api', rootRouter)  

//Static Server
server.use(express.static('public'))


//false(trabaja con mongoose default) o true(use la nueva version) quita el mesaje de Warning
  mongoose.set('strictQuery', true); 
//TODO: Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/codeVerification');

//Security config
server.use(cors());
server.use(helmet());

//content type config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))

//Redirection config
//http://localhost:8000 => http://localhost:8000/api/
server.get('/', (req: Request, res: Response) =>{
    res.redirect('/api')
})

export default server;