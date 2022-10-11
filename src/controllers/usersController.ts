import { Response, Request } from "express";
import { getAllUsersService } from "../services/usersService.js";

export async function getAllUsers(req: Request, res: Response) {
  const users = await getAllUsersService();

  res.status(200).send(users);
}
