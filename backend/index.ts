import { routes } from "./routes/index.js"
import { startDb }  from "./db/connection.js"
import cors  from 'cors'
import express  from "express"

const app = express()

const boot = async () => {
    try {
        
        // await startDb()

        app.use(cors())
        app.use(express.json())

        app.use("/", routes)


        app.listen(5000, () => {
            console.log("Server running on port ", 5000)
        })
    } catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1); 
    }
}


boot()