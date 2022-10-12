import { Router } from "express";

import {
  signInController,
  signUpController,
} from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import authSchema from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/admin/signUp", signUpController);

authRouter.post("/", schemaValidator(authSchema.loginSchema), signInController);

export default authRouter;
