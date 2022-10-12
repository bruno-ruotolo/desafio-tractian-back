import { Router } from "express";

import { companiesSchema } from "./../schemas/companiesSchema.js";
import {
  createCompanyController,
  getCompaniesController,
} from "../controllers/companiesController.js";
import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";

const companiesRouter = Router();

companiesRouter.get("/companies", authTokenMiddleware, getCompaniesController);

companiesRouter.post(
  "/companies",
  authTokenMiddleware,
  schemaValidator(companiesSchema),
  createCompanyController
);

export default companiesRouter;
