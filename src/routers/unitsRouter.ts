import { Router } from "express";

import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import unitsSchema from "../schemas/unitsSchema.js";
import {
  createUnityController,
  getUnitsController,
} from "../controllers/unitsController.js";

const unitsRouter = Router();

unitsRouter.get("/units/:id", authTokenMiddleware, getUnitsController);

unitsRouter.post(
  "/units/:id",
  authTokenMiddleware,
  schemaValidator(unitsSchema.createUnitySchema),
  createUnityController
);

export default unitsRouter;
