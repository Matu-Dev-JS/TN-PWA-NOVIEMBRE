import express from "express";
import { registerController } from "../controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post("/register", registerController)

export default authRouter