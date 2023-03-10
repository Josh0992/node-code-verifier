import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("helloController")
export class helloController implements IHelloController {
    /**
     * EndPoint to retrieve a Message "Hello {name}" in json
     * @param {String || undefined} name Name of user to be greeted
     * @returns {BasicResponse} Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');
        return {
            message: `Hello, ${name || "world!"}`
        }
    }
    
}