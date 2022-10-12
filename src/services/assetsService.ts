import {
  CreateAsset,
  UpdateHealth,
  UpdateStatus,
} from "./../interfaces/index.js";
import { conflictError } from "../utils/errorUtil.js";
import { getUnityById } from "../repositories/unitsRepository.js";
import {
  createAsset,
  getAssetByNameAndUnityId,
  getAssetsById,
  getAssetsByUnityId,
  getHealth,
  updateStatus,
  updateHealth,
  getStatus,
} from "../repositories/assetsRepository.js";
import { getUserById } from "../repositories/authRepository.js";
import dayjs from "dayjs";

export async function getAssetsService(unityId: string) {
  const assets = await getAssetsByUnityId(unityId);
  return assets;
}

export async function getHealthService(assetId: string) {
  const healths = await getHealth(assetId);
  const healthArr = [];
  const timeArr = [];

  healths.forEach(({ health, time }) => {
    healthArr.push(health);
    timeArr.push(time);
  });

  return { healthArr, timeArr };
}

export async function getStatusService(assetId: string) {
  const status = await getStatus(assetId);

  return status;
}

export async function getAssetService(assetId: string) {
  const assets = await getAssetsById(assetId);
  const user = await getUserById(assets.owner);
  const unit = await getUnityById(assets.unityId);

  const assetsData = { ...assets, owner: user, unit: unit };

  return assetsData;
}

export async function createAssetService(assetData: CreateAsset) {
  await checkUnityExist(assetData.unityId);
  await checkAssetExist(assetData.title, assetData.unityId);
  await createAsset(assetData);
}

export async function updateHealthService(healthData: UpdateHealth) {
  const time: string = dayjs().format("D/M/YY-h:m");

  await updateHealth(healthData, time);
}

export async function updateStatusService(statusData: UpdateStatus) {
  const time: string = dayjs().format("D/M/YY-h:m");

  await updateStatus(statusData, time);
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
