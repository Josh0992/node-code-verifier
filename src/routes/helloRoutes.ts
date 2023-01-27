import express, {Request, Response} from 'express';
import { BasicResponse } from 'src/controller/types';
import { helloController } from '../controller/helloController';
import { LogInfo } from '../utils/logger';

//Router de express
let helloRoute = express.Router();

//http://localhost:8000/api/hello?name=Martin
helloRoute.route('/')
//GET:    
.get(async (req: Request, res: Response) => {
    //obtiene los parametros
    let name: any = req?.query?.name;
    LogInfo(`Query params ${name}`);
    //Controller Instance to execute method
    const controller: helloController = new helloController();
    //Obtain Response
    const response: BasicResponse = await controller.getMessage(name);
    //Send to the client the response
    return res.send(response)
})

export default helloRoute
