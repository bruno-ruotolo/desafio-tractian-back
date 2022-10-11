// import { Router } from "express";

// import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";

// import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
// import assetsSchema from "../schemas/assetsSchema.js";

// const unitsRouter = Router();

// unitsRouter.get("/assets", authTokenMiddleware, getAssetsController);
// unitsRouter.get("/assets/:id", authTokenMiddleware, getAssetController);

// unitsRouter.post(
//   "/assets",
//   authTokenMiddleware,
//   schemaValidator(assetsSchema.createAssetSchema),
//   createAssetController
// );

// export default unitsRouter;
