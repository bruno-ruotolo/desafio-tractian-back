import db from "../config/db.js";

export async function getAllUsers() {
  return db.collection("users").find({}).toArray();
}
