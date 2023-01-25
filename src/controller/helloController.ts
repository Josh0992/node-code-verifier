import { BasicResponse } from "./types/indes";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class helloController implements IHelloController {
    
    public async getMessage(name?: string): Promise<BasicResponse> {
        if (name === undefined){
            return {
                message: `Hello, World!`
            }
        } 
        LogSuccess('[/api/hello] Get Request');
        return {
            message: `Hello, ${name}`
        }
    }
    
}