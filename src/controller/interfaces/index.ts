import { BasicResponse, messageDateResponse } from "../types";

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse> //name? el signo la declara como opcional, 
                                           //este metodo devuelve una promesa
}

export interface IGoodByeController{
    getMessageDate(name?:string): Promise<messageDateResponse>
}

//es una implementación especifica donde se indica lo que el metodo debe hacer.