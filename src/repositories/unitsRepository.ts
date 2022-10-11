import { CreateUnity } from "../interfaces/index";
import db from "../config/db.js";

export async function createUnity(data: CreateUnity & { companyId: string }) {
  return db.collection("units").insertOne(data);
}

export async function getUnityByNameAndCompanyId(
  name: string,
  companyId: string
) {
  return db.collection("units").findOne({ name, companyId });
}

export async function getUnitsByCompanyId(companyId: string) {
  return db.collection("units").find({ companyId }).toArray();
}
