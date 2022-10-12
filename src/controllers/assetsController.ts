import { CreateAsset, UpdateHealth, UpdateStatus } from "./../interfaces/index";
import { Request, Response } from "express";

import {
  createAssetService,
  getAssetService,
  getAssetsService,
  getHealthService,
  getStatusService,
  updateHealthService,
  updateStatusService,
} from "../services/assetsService.js";

export async function getAssetsController(req: Request, res: Response) {
  const unityId: string = req.params.id;
  const assets = await getAssetsService(unityId);
  res.status(200).send(assets);
}

export async function getHealthController(req: Request, res: Response) {
  const assetId: string = req.params.id;

  const healths = await getHealthService(assetId);
  res.status(200).send(healths);
}

export async function getStatusController(req: Request, res: Response) {
  const assetId: string = req.params.id;

  const status = await getStatusService(assetId);
  res.status(200).send(status);
}

export async function getAssetController(req: Request, res: Response) {
  const assetId: string = req.params.id;
  const assets = await getAssetService(assetId);
  res.status(200).send(assets);
}

export async function createAssetController(req: Request, res: Response) {
  const assetsData: CreateAsset = req.body;

  await createAssetService(assetsData);
  res.sendStatus(201);
}

export async function updateHealthController(req: Request, res: Response) {
  const healthData: UpdateHealth = req.body;

  await updateHealthService(healthData);
  res.sendStatus(201);
}

export async function updateStatusController(req: Request, res: Response) {
  const statusData: UpdateStatus = req.body;

  await updateStatusService(statusData);
  res.sendStatus(201);
}
