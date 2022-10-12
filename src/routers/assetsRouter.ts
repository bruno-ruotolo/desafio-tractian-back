import { Router } from "express";
import {
  createAssetController,
  getAssetController,
  getAssetsController,
  getHealthController,
  getStatusController,
  updateHealthController,
  updateStatusController,
} from "../controllers/assetsController.js";

import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";

import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import assetsSchema from "../schemas/assetsSchema.js";

const assetsRouter = Router();

assetsRouter.get("/assets/:id", authTokenMiddleware, getAssetController);
assetsRouter.get("/assets/unity/:id", authTokenMiddleware, getAssetsController);
assetsRouter.get("/asset/health/:id", authTokenMiddleware, getHealthController);
assetsRouter.get("/asset/status/:id", authTokenMiddleware, getStatusController);

assetsRouter.post(
  "/asset/health",
  authTokenMiddleware,
  schemaValidator(assetsSchema.updateHealth),
  updateHealthController
);
assetsRouter.post(
  "/asset/status",
  authTokenMiddleware,
  schemaValidator(assetsSchema.updateStatus),
  updateStatusController
);
assetsRouter.post(
  "/assets",
  authTokenMiddleware,
  schemaValidator(assetsSchema.createAssetSchema),
  createAssetController
);

export default assetsRouter;
