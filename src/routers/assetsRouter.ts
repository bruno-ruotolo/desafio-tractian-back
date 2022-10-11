import { Router } from "express";
import {
  createAssetController,
  getAssetController,
  getAssetsController,
} from "../controllers/assetsController.js";

import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";

import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import assetsSchema from "../schemas/assetsSchema.js";

const assetsRouter = Router();

assetsRouter.get("/assets/:id", authTokenMiddleware, getAssetController);
assetsRouter.get("/assets/unity/:id", authTokenMiddleware, getAssetsController);

assetsRouter.post(
  "/assets",
  authTokenMiddleware,
  schemaValidator(assetsSchema.createAssetSchema),
  createAssetController
);

export default assetsRouter;
