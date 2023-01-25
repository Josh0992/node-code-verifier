import express, {Request, Response} from 'express';
import { goodByeController } from '../controller/goodByeController';
import { LogInfo } from '../utils/logger';

let goodByeRoute = express.Router();

goodByeRoute.route('/')
.get(async (req: Request, res: Response) => {
let name: any = req?.query?.name;
LogInfo(`Query params ${name}`);
const controller: goodByeController = new goodByeController();
const response = await controller.getMessageDate(name);
return res.send(response);
})

export default goodByeRoute;