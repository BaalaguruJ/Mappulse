import { type Request, type Response, Router } from "express";
import { demoController } from "../controller/LoginController";

const loginRoute = Router()

loginRoute.get("/", (
    req : Request, 
    res : Response
) => {
    res.status(200).json({message : "Login route"})
})

loginRoute.get("/demo", demoController)
export default loginRoute