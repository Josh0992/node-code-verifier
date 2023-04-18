import express, {Request, Response} from 'express'; 
import { UserController } from '../controller/userController';


//Router de express
let usersRoute = express.Router();

//http://localhost:8000/api/users
usersRoute.route('/')
//GET:    
.get(async (req: Request, res: Response) => {

    //Controller Instance to execute method
    const controller: UserController = new UserController();
    //Obtain Response
    const response: any = await controller.getUsers();
    //Send to the client the response
    return res.send(response)
})

export default usersRoute
