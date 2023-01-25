/**
 * Root Router 
 * Redirections Router
 */

import express, {Request, Response} from 'express';
import { LogInfo } from '../utils/logger';
import { helloController } from '../controller/helloController';
import helloRoute from './helloRoutes';
import goodByeRoute from './goodByeRouter';
import { info } from 'console';

//Server instance
let server = express();
//Router instance
let rootRouter = express.Router()

//activate for requests to http://localhost:8000/api
//GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('http://localhost:8000/api/')
    res.send('Programa Backend con TS, nodeJS, express, mongo');
})

//Redirections to Router and controller
server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRoute); //http://localhost:8000/api/hello => helloRouter
//Add more Routes to the app
server.use('/bye', goodByeRoute);

export default server;