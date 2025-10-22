import { type Request, type Response, Router } from "express";
import loginRoute from "./loginRoute";

const router = Router()

router.get("/", (
    req : Request,
    res : Response
) => {
    res.status(200).json({message : "success"})
})

router.use("/login", loginRoute)

export default router