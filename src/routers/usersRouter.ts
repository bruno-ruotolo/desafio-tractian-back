import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/authController.js";
import {
  getAllUsersController,
  getUsersCompanyController,
} from "../controllers/usersController.js";
import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import userSchema from "../schemas/usersSchema.js";

const usersRouter = Router();

usersRouter.get("/users", authTokenMiddleware, getAllUsersController);
usersRouter.get(
  "/users/company/:id",
  authTokenMiddleware,
  getUsersCompanyController
);

usersRouter.post(
  "/users",
  authTokenMiddleware,
  schemaValidator(userSchema.createUser),
  createUserController
);

usersRouter.delete("/users/:id", authTokenMiddleware, deleteUserController);

usersRouter.put(
  "/users",
  authTokenMiddleware,
  schemaValidator(userSchema.updateUser),
  updateUserController
);

export default usersRouter;
