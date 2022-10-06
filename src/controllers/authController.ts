import { Request, Response } from "express";
import { AuthInterface } from "../interfaces";
import { insertAdminUser } from "../repositories/authRepository.js";
import { signInService } from "../services/authService.js";

export async function signInController(req: Request, res: Response) {
  const signInBody: AuthInterface = req.body;

  const token = await signInService(signInBody);

  res.status(200).send(token);
}

export async function signUpController(req: Request, res: Response) {
  const message = await insertAdminUser();

  res.status(201).send(message);
}
