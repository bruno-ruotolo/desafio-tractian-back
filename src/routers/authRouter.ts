import { Router } from "express";
import {
  createUserController,
  signInController,
  signUpController,
} from "../controllers/authController.js";
import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";

import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import authSchema from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/admin/signUp", signUpController);

authRouter.post("/", schemaValidator(authSchema.loginSchema), signInController);

export default authRouter;
