"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration the .env tile
dotenv_1.default.config();
//create app Express
const app = (0, express_1.default)();
const port = process.env.PORT || 8000; //si no encuentra el puerto de la variable lo tomara manualmente
//Define the first the route of app
app.get('/', (req, res) => {
    //send Hello World
    res.send('Hello World');
});
//execute app
app.listen(port, () => console.log('Express running localhost port: ', port));
//# sourceMappingURL=index.js.map