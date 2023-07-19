import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - User
import { getAllUsers, getUserByID, deleteUserByID, createUser, updateUserById } from "../domain/orm/User.orm";
import { query, response } from "express";
import { BasicResponse } from "./types";

@Route("/api/users")
@Tags("IUserController")
export class UserController implements IUserController{
    /**
     * Endpoint to retrieve the users in the collections "Users" of DB
     * @param {string} id id of user to retrieve (optional) 
     * @returns All user or user id
    */
   @Get("/")
   public async getUsers(@Query()id?: string): Promise<any> {
       
       let response: any = '';
       
       if(id){
           LogSuccess(`[/api/users?id] Get user by id: ${id}`);
           response = await getUserByID(id);
        }else{
            LogSuccess('[/api/users] Get all users request')
            
            response = await getAllUsers();
        }
        return response;       
    }
    
    /**
     * Endpoint to delete the users in the collections "Users" of DB
     * @param {string} id id of user to delete (optional) 
     * @returns message informing if deletion was correct.
    */
   @Delete("/")
   public async deleteUsers(@Query()id?: string): Promise<any> {
       
       let response: any = '';
       
       if(id){
           LogSuccess(`[/api/users?id] Delete user by id: ${id}`);
           await deleteUserByID(id).then((r)=>{
               response ={
                   message: `user with ID ${id} deleted successfully`
                }
            });
        }else{
            LogWarning('[/api/users] Delete users request without ID')
            
            response = {
                message: `Please, provide an ID to remove from database`
            }
        }
        return response;       
    }

    @Post("/")
    public async createUser(user: any): Promise<any> {
        
        let response: any = '';

        await createUser(user).then((r: any)=>{
            LogSuccess(`[/api/users] create user ${user}`);
            response =  {
                message: `user created susccessfully: ${user.name}`
            }
        })
        return response
    }

    @Put("/")
    public async updateUser(@Query()id: string,  user: any): Promise<any> {
        let response: any = '';
       
       if(id){
           LogSuccess(`[/api/users] update user by id: ${id}`);
           await updateUserById(id, user).then((r)=>{
               response ={
                   message: `user with ID ${id} update successfully`
                }
            });
        }else{
            LogWarning('[/api/users] update users request without ID')
            
            response = {
                message: `Please, provide an ID to update an existing user`
            }
        }
        return response; 
    }


}
