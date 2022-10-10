import { Login, UserData } from "./../interfaces/index";
import { Request, Response } from "express";
import { insertAdminUser } from "../repositories/authRepository.js";
import { createUserService, signInService } from "../services/authService.js";

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
  const userBody = req.body;
  await createUserService(userBody);

  res.sendStatus(201);
}
