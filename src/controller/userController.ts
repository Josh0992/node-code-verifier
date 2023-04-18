import { Get, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

//ORM - User
import { getAllUsers } from "../domain/orm/User.orm";
import { response } from "express";

@Route("/api/users")
@Tags("IUserController")
export class UserController implements IUserController{
    /**
     * Endpoint to retrieve the users in the collection "user" of DB
     */
    public async getUsers(): Promise<any> {
       LogSuccess('[/api/users] Get all users request')

      const response = await getAllUsers();
       
       return response;

    }
    
}
