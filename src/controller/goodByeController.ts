import { messageDateResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class goodByeController implements IGoodByeController{
    public async getMessageDate(name?: string): Promise<messageDateResponse> {
        if(name===undefined){
            return {
                message: "Good bye World!",
                date: new Date
            }
        }
        LogSuccess('[/api/goodbye] Get Request')
        return {
            message: `Good bye ${name}`,
            date: new Date
        }        
    }
    
}