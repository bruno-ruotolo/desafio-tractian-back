import { CreateAsset } from "./../interfaces/index.js";
import { conflictError } from "../utils/errorUtil.js";
import { getUnityById } from "../repositories/unitsRepository.js";
import {
  createAsset,
  getAssetByNameAndUnityId,
  getAssetsById,
  getAssetsByUnityId,
} from "../repositories/assetsRepository.js";

export async function getAssetsService(unityId: string) {
  const assets = await getAssetsByUnityId(unityId);

  return assets;
}

export async function getAssetService(assetId: string) {
  const assets = await getAssetsById(assetId);

  return assets;
}

export async function createAssetService(assetData: CreateAsset) {
  await checkUnityExist(assetData.unityId);
  await checkAssetExist(assetData.title, assetData.unityId);
  await createAsset(assetData);
}

async function checkAssetExist(assetName: string, unityId: string) {
  const asset = await getAssetByNameAndUnityId(assetName, unityId);
  if (asset) {
    throw conflictError("This asset already exist");
  }
}

async function checkUnityExist(unityName: string) {
  const unity = await getUnityById(unityName);
  if (!unity) {
    throw conflictError("This unity do not exist");
  }
}
