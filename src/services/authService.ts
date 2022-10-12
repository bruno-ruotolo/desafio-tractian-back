import bcrypt from "bcrypt";

import { CreateUser, UpdateUser } from "./../interfaces/index";
import {
  createSession,
  createUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../repositories/authRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtil.js";
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

export async function updateUserService(userBody: UpdateUser) {
  const { id, password } = userBody;
  await checkUserExist(id);

  const passwordHash = encryptPassword(password);

  await updateUser({ ...userBody, password: passwordHash });
}

export async function deleteUserService(userId: string) {
  await checkUserExist(userId);
  await deleteUser(userId);
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

async function checkUserExist(userId: string) {
  const user = await getUserById(userId);
  if (!user) {
    throw notFoundError("This user do not exist");
  }
}

async function checkEmailAlreadyExist(email: string) {
  const user = await getUserByEmail(email);
  if (user) {
    throw conflictError("This user email is already in use");
  }
}
