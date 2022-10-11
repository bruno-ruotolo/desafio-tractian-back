import { ObjectId } from "mongodb";
import { CreateUnity } from "./../interfaces/index.js";
import {
  getCompanyById,
  getCompanyByUserId,
} from "../repositories/companiesRepository.js";
import { conflictError } from "../utils/errorUtil.js";
import {
  createUnity,
  getUnitsByCompanyId,
  getUnityByNameAndCompanyId,
} from "../repositories/unitsRepository.js";

export async function getUnityService(companyId: string) {
  const units = await getUnitsByCompanyId(companyId);

  return units;
}

export async function createUnityService(
  unityData: CreateUnity,
  companyId: string
) {
  await checkCompanyExist(companyId);
  await checkUnityExist(unityData.name, companyId);
  const data = { ...unityData, companyId };
  await createUnity(data);
}

async function checkCompanyExist(companyId: string) {
  const company = await getCompanyById(new ObjectId(companyId));
  if (!company) {
    throw conflictError("This company do not exist");
  }
}

async function checkUnityExist(unityName: string, companyId: string) {
  const unity = await getUnityByNameAndCompanyId(unityName, companyId);
  if (unity) {
    throw conflictError("This unity already exist");
  }
}
