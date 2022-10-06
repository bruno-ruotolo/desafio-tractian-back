import bcrypt from "bcrypt";
import {
  createSession,
  getUserByEmail,
} from "../repositories/authRepository.js";
import { unauthorizedError } from "../utils/errorUtil.js";
import { generateJWTToken } from "../utils/utils.js";

import { AuthInterface, UserData } from "./../interfaces";

export async function signInService(signInBody: AuthInterface) {
  const { email, password } = signInBody;

  const userResult = await checkEmailExist(email);
  decryptPassword(password, userResult.password);
  delete userResult.password;
  const token = await generateJWTToken(userResult);

  await createSession(userResult._id, token);
  return token;
}

function decryptPassword(password: string, hashedPassword: string) {
  if (!bcrypt.compareSync(password, hashedPassword)) {
    throw unauthorizedError("Username/Password is not valid");
  }
}

async function checkEmailExist(email: string): Promise<UserData> {
  return getUserByEmail(email);
}
