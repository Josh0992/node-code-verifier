import { Get, Query, Route, Tags } from "tsoa";
import { messageDateResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

@Route('/api/bye')
@Tags('goodByeController')
export class goodByeController implements IGoodByeController{
    /**
     * EndPoint to retrieve a Message "Good bye {name}" and Date in json
     * @param {string || undefined} name Name of user to be greeted
     * @returns {messageDateResponse} Promise of messageDateResponse
     */
    @Get('/')
    public async getMessageDate(@Query()name?: string): Promise<messageDateResponse> {
        LogSuccess('[/api/goodbye] Get Request')
        return {
            message: `Good bye ${name || "world!"}`,
            date: new Date
        }        
    }
    
}