import { Request, Response } from "express";

import {
  createCompanyService,
  getCompaniesService,
} from "../services/companiesService.js";
import { CreateCompany, UserData } from "./../interfaces/index.js";

export async function getCompaniesController(req: Request, res: Response) {
  const userData: UserData = res.locals.token;

  const companies = await getCompaniesService(userData._id);

  res.status(200).send(companies);
}

export async function createCompanyController(req: Request, res: Response) {
  const userData: UserData = res.locals.token;
  const companyData: CreateCompany = req.body;

  await createCompanyService(companyData, userData._id);
  res.sendStatus(201);
}
