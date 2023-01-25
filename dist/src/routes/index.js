"use strict";
/**
 * Root Router
 * Redirections Router
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
const helloRoutes_1 = __importDefault(require("./helloRoutes"));
//Server instance
let server = (0, express_1.default)();
//Router instance
let rootRouter = express_1.default.Router();
//activate for requests to http://localhost:8000/api
//GET: http://localhost:8000/api/
rootRouter.get('/', (req, res) => {
    (0, logger_1.LogInfo)('http://localhost:8000/api/');
    res.send('Programa Backend con TS, nodeJS, express, mongo');
});
//Redirections to Router and controller
server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRoutes_1.default); //http://localhost:8000/api/hello => helloRouter
//Add more Routes to the app
exports.default = server;
//# sourceMappingURL=index.js.map