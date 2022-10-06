import { Router } from "express";

import { schemaValidator } from "../middlewares/schemaValidatorMiddleware";
import authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/", schemaValidator(authSchema));

export default authRouter;
