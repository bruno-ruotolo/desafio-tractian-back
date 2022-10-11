import { Request, Response } from "express";

import { CreateUnity } from "../interfaces/index.js";
import {
  createUnityService,
  getUnityService,
} from "../services/unitsService.js";

export async function getUnitsController(req: Request, res: Response) {
  const companyId: string = req.params.id;
  const units = await getUnityService(companyId);
  res.status(200).send(units);
}

export async function createUnityController(req: Request, res: Response) {
  const companyId: string = req.params.id;
  const unityData: CreateUnity = req.body;

  await createUnityService(unityData, companyId);
  res.sendStatus(201);
}
