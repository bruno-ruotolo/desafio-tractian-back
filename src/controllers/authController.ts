import { Request, Response } from "express";

import { CreateUser, Login, UpdateUser } from "./../interfaces/index";
import { insertAdminUser } from "../repositories/authRepository.js";
import {
  createUserService,
  deleteUserService,
  signInService,
  updateUserService,
} from "../services/authService.js";

export async function signInController(req: Request, res: Response) {
  const signInBody: Login = req.body;

  const token = await signInService(signInBody);

  res.status(200).send(token);
}

export async function signUpController(req: Request, res: Response) {
  const message = await insertAdminUser();

  res.status(201).send(message);
}

export async function createUserController(req: Request, res: Response) {
  const userBody: CreateUser = req.body;
  await createUserService(userBody);

  res.sendStatus(201);
}

export async function updateUserController(req: Request, res: Response) {
  const userBody: UpdateUser = req.body;
  await updateUserService(userBody);

  res.sendStatus(201);
}

export async function deleteUserController(req: Request, res: Response) {
  const { id } = req.params;
  await deleteUserService(id);

  res.sendStatus(201);
}
