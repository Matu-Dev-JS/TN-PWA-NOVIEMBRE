import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createWorkspaceController } from "../controllers/workspace.controller.js"

const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)

export default workspace_router