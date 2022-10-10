import jwt from "jsonwebtoken";
import { UserData } from "./../interfaces/index";

export async function generateJWTToken(userData: UserData) {
  const { _id, email, name, image, manager, companies } = userData;
  const tokenBody = { _id, email, name, image, manager, companies };
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  const EXPIRATION_DATE = { expiresIn: "2d" };

  const token = jwt.sign(tokenBody, JWT_SECRET_KEY, EXPIRATION_DATE);

  return token;
}
