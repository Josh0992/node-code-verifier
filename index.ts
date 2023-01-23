import express, { Express, Request, Response } from "express"; 
import dotenv from "dotenv"

//configuration the .env tile
dotenv.config();

//create app Express
const app: Express = express();

const port: string | number = process.env.PORT || 8000; //si no encuentra el puerto de la variable lo tomara manualmente

//Define the first the route of app
app.get('/', (req: Request, res: Response) => {
    //send Hello World
    res.send('Hello World');
})

app.get('/ejercicio', (req: Request, res: Response) => {
    res.status(200).json({
        data: {
            mensaje: "Good bye, World"
        }
    })
})

app.get('/:nombre', (req: Request, res: Response) => {
    res.status(200).json({
        data: {
            mensaje: "Hola " + req.params.nombre
        }
    })
})

//execute app
app.listen(port, ()=> console.log('Express running localhost port: ', port))