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
  console.log(userCompanyArr);

  const companies = await Promise.all(
    userCompanyArr.map(async (userCompany) => {
      const company = await getCompanyById(userCompany.companyId);
      console.log(company);
      return company;
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

  if (company) {
    throw conflictError("This company is already registered");
  }
}
