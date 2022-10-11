import { Router } from "express";

import authRouter from "./authRouter.js";
import companiesRouter from "./companiesRouter.js";
import unitsRouter from "./unitsRouter.js";
import usersRouter from "./usersRouter.js";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(companiesRouter);
mainRouter.use(usersRouter);
mainRouter.use(unitsRouter);

export default mainRouter;
