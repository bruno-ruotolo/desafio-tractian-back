import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { UserData } from "./../interfaces/index";
import db from "../config/db.js";

export async function getUserByEmail(email: string) {
  const userData = (await db
    .collection("users")
    .findOne({ email: email.toLowerCase() })) as UserData;
  return userData;
}

export async function createSession(_id: ObjectId, token: string) {
  await db.collection("sessions").insertOne({
    userId: _id,
    date: new Date(),
    token,
  });
}

export async function insertAdminUser() {
  const _PASSWORD = "123Emerson";
  const _EMAIL = "emerson@naittrac.com";
  const _IMAGE =
    "https://img.freepik.com/premium-vector/cartoon-drawing-construction-worker_29937-8198.jpg";
  const _NAME = "Emerson";
  const _ADMIN = true;
  const _SALT = 10;
  const hashedPassword = bcrypt.hashSync(_PASSWORD, _SALT);

  await db.collection("users").insertOne({
    email: _EMAIL,
    password: hashedPassword,
    image: _IMAGE,
    name: _NAME,
    admin: _ADMIN,
  });
  const findUser = await db.collection("users").findOne({ email: _EMAIL });
  if (!findUser) return "Something got wrong";
  return "Admin User Registered";
}
