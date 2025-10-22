import { Request, Response } from "express";

export const demoController = (
    req : Request,
    res : Response
) => {
    res.send("Login controller")
}