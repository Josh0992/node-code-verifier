import { BasicResponse } from "../types/indes";

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse> //name? el signo la declara como opcional, 
                                           //este metodo devuelve una promesa

}

//es una implementación especifica donde se indica lo que el metodo debe hacer.