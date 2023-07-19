"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
const userController_1 = require("../controller/userController");
//Router de express
let usersRoute = express_1.default.Router();
//http://localhost:8000/api/users?id=63dd3c265ea1024f5aa937b3
usersRoute.route('/')
    //GET:    
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //obtiene los parametro ID
    let id = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id;
    (0, logger_1.LogInfo)(`Query params ${id}`);
    //Controller Instance to execute method
    const controller = new userController_1.UserController();
    //Obtain Response
    const response = yield controller.getUsers(id);
    //Send to the client the response
    return res.send(response);
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    //obtiene los parametro ID
    let id = (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.id;
    (0, logger_1.LogInfo)(`Query params ${id}`);
    //Controller Instance to execute method
    const controller = new userController_1.UserController();
    //Obtain Response
    const response = yield controller.deleteUsers(id);
    //Send to the client the response
    return res.send(response);
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e;
    //obtiene los parametro con Query params
    let name = (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.name;
    let email = (_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.email;
    let age = (_e = req === null || req === void 0 ? void 0 : req.query) === null || _e === void 0 ? void 0 : _e.age;
    //Controller Instance to execute method
    const controller = new userController_1.UserController();
    let user = {
        name: name || 'Default',
        email: email || 'email default',
        age: age || 0
    };
    //Obtain Response
    const response = yield controller.createUser(user);
    //Send to the client the response
    return res.send(response);
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h, _j;
    //obtiene los parametro con Query params
    let id = (_f = req === null || req === void 0 ? void 0 : req.query) === null || _f === void 0 ? void 0 : _f.id;
    let name = (_g = req === null || req === void 0 ? void 0 : req.query) === null || _g === void 0 ? void 0 : _g.name;
    let email = (_h = req === null || req === void 0 ? void 0 : req.query) === null || _h === void 0 ? void 0 : _h.email;
    let age = (_j = req === null || req === void 0 ? void 0 : req.query) === null || _j === void 0 ? void 0 : _j.age;
    (0, logger_1.LogInfo)(`Query params ${id}, ${name}, ${email}, ${age}`);
    //Controller Instance to execute method
    const controller = new userController_1.UserController();
    let user = {
        name: name,
        email: email,
        age: age
    };
    //Obtain Response
    const response = yield controller.updateUser(id, user);
    //Send to the client the response
    return res.send(response);
}));
exports.default = usersRoute;
//# sourceMappingURL=userRouter.js.map