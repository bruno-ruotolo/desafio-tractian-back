import { ObjectId } from "mongodb";
import { CreateAsset } from "./../interfaces/index";
import db from "../config/db.js";

export async function createAsset(data: CreateAsset) {
  return db.collection("assets").insertOne(data);
}

export async function getAssetsByUnityId(unityId: string) {
  return db.collection("assets").find({ unityId }).toArray();
}
export async function getAssetsById(_id: string) {
  return db.collection("assets").findOne({ _id: new ObjectId(_id) });
}

export async function getAssetByNameAndUnityId(title: string, unityId: string) {
  return db.collection("assets").findOne({ title, unityId });
}

export async function getUnitsByCompanyId(companyId: string) {
  return db.collection("units").find({ companyId }).toArray();
}
