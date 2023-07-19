import { BasicResponse, messageDateResponse } from "../types";

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse> //name? el signo la declara como opcional, 
                                           //este metodo devuelve una promesa
}

export interface IGoodByeController{
    getMessageDate(name?:string): Promise<messageDateResponse>
}

//es una implementación especifica donde se indica lo que el metodo debe hacer.
export interface IUserController{

    //Read all user from database || Find User by ID <ObjectId>
    getUsers(id?: string): Promise<any>
    //Delete all user from database || delete User by ID <ObjectId>
    deleteUsers(id?: string): Promise<any>
    //Create new user
    createUser(user: any): Promise<any>
    //update user
    updateUser(user: any, id:String): Promise<any>
}