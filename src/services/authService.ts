import { CreateUser } from "./../interfaces/index";
import bcrypt from "bcrypt";
import {
  createSession,
  createUser,
  getUserByEmail,
} from "../repositories/authRepository.js";
import { conflictError, unauthorizedError } from "../utils/errorUtil.js";
import { generateJWTToken } from "../utils/utils.js";

import { Login, UserData } from "./../interfaces";

export async function signInService(signInBody: Login) {
  const { email, password } = signInBody;

  const userResult = await checkEmailExist(email);

  decryptPassword(password, userResult.password);
  delete userResult.password;
  const token = await generateJWTToken(userResult);

  await createSession(userResult._id, token);
  return token;
}

export async function createUserService(userBody: CreateUser) {
  const { email, password } = userBody;

  await checkEmailAlreadyExist(email);

  const passwordHash = encryptPassword(password);

  await createUser({ ...userBody, password: passwordHash });
}

function decryptPassword(password: string, hashedPassword: string) {
  if (!bcrypt.compareSync(password, hashedPassword)) {
    throw unauthorizedError("Username/Password is not valid");
  }
}

function encryptPassword(password: string) {
  const _SALT = 10;
  return bcrypt.hashSync(password, _SALT);
}

async function checkEmailExist(email: string): Promise<UserData> {
  return getUserByEmail(email);
}

async function checkEmailAlreadyExist(email: string) {
  const user = await getUserByEmail(email);
  if (user) {
    throw conflictError("This user email is already in use");
  }
}
