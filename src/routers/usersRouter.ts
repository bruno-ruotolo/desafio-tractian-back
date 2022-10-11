import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  signInController,
  signUpController,
  updateUserController,
} from "../controllers/authController.js";
import { getAllUsers } from "../controllers/usersController.js";
import authTokenMiddleware from "../middlewares/authTokenMiddleware.js";

import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import authSchema from "../schemas/authSchema.js";
import userSchema from "../schemas/usersSchema.js";

const usersRouter = Router();

usersRouter.get("/users", authTokenMiddleware, getAllUsers);

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
