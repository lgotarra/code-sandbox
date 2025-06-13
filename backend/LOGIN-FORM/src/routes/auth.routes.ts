import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { validateData } from "../middlewares/validate";
import { loginSchema } from "../schemas/login.schema";

const router = Router();

// POST /login
router.post("/", validateData(loginSchema), login);

export default router;
