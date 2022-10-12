import { ObjectId } from "mongodb";

import db from "../config/db.js";
import { CreateAsset, UpdateHealth, UpdateStatus } from "./../interfaces/index";

export async function createAsset(data: CreateAsset) {
  return db.collection("assets").insertOne(data);
}

export async function updateHealth(data: UpdateHealth, time: string) {
  return db.collection("healthAssets").insertOne({ ...data, time });
}

export async function updateStatus(data: UpdateStatus, time: string) {
  return db.collection("statusAssets").insertOne({ ...data, time });
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

export async function getUnitsByCompanyId(unitId: string) {
  return db.collection("units").find({ unitId }).toArray();
}

export async function getHealth(assetId: string) {
  return db.collection("healthAssets").find({ assetId }).toArray();
}

export async function getStatus(assetId: string) {
  return db
    .collection("statusAssets")
    .findOne({ assetId }, { sort: { _id: -1 }, limit: 1 });
}
