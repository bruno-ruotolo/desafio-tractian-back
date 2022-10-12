import { ObjectId } from "mongodb";

import db from "../config/db.js";
import { CreateCompany } from "./../interfaces/index";

export async function getCompanyByUserId(userId: ObjectId) {
  return db
    .collection("userCompany")
    .find({ userId: new ObjectId(userId) })
    .toArray();
}

export async function getCompanyById(_id: ObjectId) {
  return db.collection("companies").findOne({ _id });
}

export async function getCompanyByName(name: string) {
  return db.collection("companies").findOne({ name });
}

export async function createCompany(companyData: CreateCompany) {
  return db.collection("companies").insertOne(companyData);
}

export async function linkCompanyAndUser(
  companyId: ObjectId,
  userId: ObjectId
) {
  return db
    .collection("userCompany")
    .insertOne({ userId: new ObjectId(userId), companyId });
}
