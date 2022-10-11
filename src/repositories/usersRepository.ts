import db from "../config/db.js";

export async function getAllUsers() {
  return db.collection("users").find({}).toArray();
}
export async function getUsersByCompany(companyId: string) {
  return db.collection("users").find({ companyId }).toArray();
}
