import express from "express";
import { registerController, verifyEmailController } from "../controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post("/register", registerController)
authRouter.get('/verify-email', verifyEmailController)
export default authRouter