import { Router } from 'express';
import { registerController } from '../controller/RegisterController'; // Adjust path

const registerRoute = Router();

// This will handle POST requests to /register
registerRoute.post('/', registerController);

export default registerRoute;
