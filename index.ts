//Environment variables
import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//configuration the .env tile
dotenv.config();
const port = process.env.PORT || 8000;

//*execute server
server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

//control Server error
server.on('error', (error)=>{
    LogError(`[SERVER ERROR]: ${error}`);    
})
