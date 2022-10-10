import { ObjectId } from "mongodb";
import { CreateCompany } from "./../interfaces/index";
import db from "../config/db.js";

export async function getCompanyByUserId(userId: ObjectId) {
  return db
    .collection("userCompany")
    .find({ userId: new ObjectId(userId) })
    .toArray();
}

export async function getCompanyById(companyId: ObjectId) {
  return db.collection("companies").findOne({ _id: companyId });
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
