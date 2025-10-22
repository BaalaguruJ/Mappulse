import { Router, type Request, type Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "success" });
});

export { routes };
