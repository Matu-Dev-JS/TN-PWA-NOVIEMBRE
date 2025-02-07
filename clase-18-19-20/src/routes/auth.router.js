import express from "express";
import { loginController, registerController, verifyEmailController } from "../controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post("/register", registerController)
authRouter.get('/verify-email', verifyEmailController)
authRouter.post('/login', loginController)
export default authRouter