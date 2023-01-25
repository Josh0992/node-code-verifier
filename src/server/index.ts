import express, {Request, Response} from 'express';

//Security
import cors from 'cors';
import helmet from 'helmet';

//TODO: HTTPS

//Root Router
import rootRouter from '../routes';

//create app Express
const server = express();

//Define server to use "/api" to use rootRouter from 'index.ts' in routes
//from this point onover: http://localhost:8000/api/...
server.use('/api', rootRouter)

//TODO: Mongoose Connection

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