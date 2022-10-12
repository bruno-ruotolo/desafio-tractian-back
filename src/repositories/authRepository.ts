import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

import db from "../config/db.js";
import { CreateUser, UpdateUser, UserData } from "./../interfaces/index";

export async function getUserByEmail(email: string) {
  const userData = (await db
    .collection("users")
    .findOne({ email: email.toLowerCase() })) as UserData;
  return userData;
}

export async function getUserById(_id: string) {
  const userData = await db
    .collection("users")
    .findOne({ _id: new ObjectId(_id) });
  return userData;
}

export async function createSession(_id: ObjectId, token: string) {
  await db.collection("sessions").insertOne({
    userId: _id,
    date: new Date(),
    token,
  });
}

export async function createUser(userBody: CreateUser) {
  await db.collection("users").insertOne(userBody);
}

export async function updateUser(userBody: UpdateUser) {
  const { id, email, password, name, companyId, manager } = userBody;
  await db
    .collection("users")
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { email, password, name, companyId, manager } }
    );
}

export async function deleteUser(_id: string) {
  await db.collection("users").deleteOne({ _id: new ObjectId(_id) });
}

export async function insertAdminUser() {
  const _PASSWORD = "123tractian";
  const _EMAIL = "tractian@naittrac.com";
  const _NAME = "Tractian";
  const _ADMIN = true;
  const _COMPANIES = [1];
  const _SALT = 10;
  const hashedPassword = bcrypt.hashSync(_PASSWORD, _SALT);

  await db.collection("users").insertOne({
    email: _EMAIL,
    password: hashedPassword,
    name: _NAME,
    manager: _ADMIN,
    companies: _COMPANIES,
  });
  const findUser = await db.collection("users").findOne({ email: _EMAIL });
  if (!findUser) return "Something got wrong";
  return "Admin User Registered";
}
