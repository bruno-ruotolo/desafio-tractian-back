import { Response, Request } from "express";
import {
  getAllUsersService,
  getUsersCompanyService,
} from "../services/usersService.js";

export async function getAllUsersController(req: Request, res: Response) {
  const users = await getAllUsersService();

  res.status(200).send(users);
}

export async function getUsersCompanyController(req: Request, res: Response) {
  const { id: companyId } = req.params;

  const users = await getUsersCompanyService(companyId);

  res.status(200).send(users);
}
