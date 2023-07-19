import express, {Request, Response} from 'express'; 
import { LogInfo } from '../utils/logger';
import { UserController } from '../controller/userController';


//Router de express
let usersRoute = express.Router();

//http://localhost:8000/api/users?id=63dd3c265ea1024f5aa937b3
usersRoute.route('/')
//GET:    
.get(async (req: Request, res: Response) => {
    //obtiene los parametro ID
    let id: any = req?.query?.id;
    LogInfo(`Query params ${id}`);
    //Controller Instance to execute method
    const controller: UserController = new UserController();
    //Obtain Response
    const response: any = await controller.getUsers(id);
    //Send to the client the response
    return res.send(response)
})

.delete(async (req: Request, res: Response) => {
    //obtiene los parametro ID
    let id: any = req?.query?.id;
    LogInfo(`Query params ${id}`);

    //Controller Instance to execute method
    const controller: UserController = new UserController();
    //Obtain Response
    const response: any = await controller.deleteUsers(id);
    //Send to the client the response
    return res.send(response)
})

.post(async (req: Request, res: Response) => {
    //obtiene los parametro con Query params
    let name: any = req?.query?.name;
    let email: any = req?.query?.email;
    let age: any = req?.query?.age;


    //Controller Instance to execute method
    const controller: UserController = new UserController();

    let user= {
        name: name || 'Default',
        email: email || 'email default',
        age: age || 0
    }

    //Obtain Response
    const response: any = await controller.createUser(user);
    //Send to the client the response
    return res.send(response)
})

.put(async (req: Request, res: Response) => {
    //obtiene los parametro con Query params
    let id: any = req?.query?.id;
    let name: any = req?.query?.name;
    let email: any = req?.query?.email;
    let age: any = req?.query?.age;
    LogInfo(`Query params ${id}, ${name}, ${email}, ${age}`);

    //Controller Instance to execute method
    const controller: UserController = new UserController();

    let user= {
        name: name,
        email: email,
        age: age
    }

    //Obtain Response
    const response: any = await controller.updateUser(id, user);
    //Send to the client the response
    return res.send(response)
})

export default usersRoute
