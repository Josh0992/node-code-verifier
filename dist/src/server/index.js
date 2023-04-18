"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//Security
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
//TODO: HTTPS
//Root Router
const routes_1 = __importDefault(require("../routes"));
const mongoose_1 = __importDefault(require("mongoose"));
//create app Express
const server = (0, express_1.default)();
//*Swagger Config and route
//implements html SWIGGER
//http://localhost:8000/docs
server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}));
// * Define server to use "/api" to use rootRouter from 'index.ts' in routes
//from this point onover: http://localhost:8000/api/...
server.use('/api', routes_1.default);
//Static Server
server.use(express_1.default.static('public'));
//false(trabaja con mongoose default) o true(use la nueva version) quita el mesaje de Warning
mongoose_1.default.set('strictQuery', true);
//TODO: Mongoose Connection
mongoose_1.default.connect('mongodb://127.0.0.1:27017/codeVerification');
//Security config
server.use((0, cors_1.default)());
server.use((0, helmet_1.default)());
//content type config
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(express_1.default.json({ limit: '50mb' }));
//Redirection config
//http://localhost:8000 => http://localhost:8000/api/
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
//# sourceMappingURL=index.js.map