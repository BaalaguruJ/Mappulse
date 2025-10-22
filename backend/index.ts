import express from 'express';
import router from './routes';
import cors from 'cors'
import { startDb } from './db/connection';

const app = express();

const boot = async() => {
    try {

        await startDb()

        app.use(express.json())
        app.use(cors())

        app.use("/api", router)

        app.listen(3000, () => {
            console.log("Server running on port ", 3000)
        })
    } catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1); 
    }
}

boot()