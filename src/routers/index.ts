import { Router } from "express";

import authRouter from "./authRouter.js";
import companiesRouter from "./companiesRouter.js";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(companiesRouter);

export default mainRouter;
