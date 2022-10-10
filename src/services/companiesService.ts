import { ObjectId } from "mongodb";
import { CreateCompany } from "./../interfaces/index.js";
import {
  createCompany,
  getCompanyById,
  getCompanyByName,
  getCompanyByUserId,
  linkCompanyAndUser,
} from "../repositories/companiesRepository.js";
import { conflictError } from "../utils/errorUtil.js";

export async function getCompaniesService(userId: ObjectId) {
  const userCompanyArr = await getCompanyByUserId(userId);

  const companies = await Promise.all(
    userCompanyArr.map(async (userCompany) => {
      return await getCompanyById(userCompany.companyId);
    })
  );

  return companies;
}

export async function createCompanyService(
  companyData: CreateCompany,
  userId: ObjectId
) {
  await checkCompanyExist(companyData.name);
  const company = await createCompany(companyData);
  await linkCompanyAndUser(company.insertedId, userId);
}

async function checkCompanyExist(companyName: string) {
  const company = await getCompanyByName(companyName);
  console.log(company);

  if (company) {
    throw conflictError("This company is already registered");
  }
}
