import { CreateAsset } from "./../interfaces/index";
import { Request, Response } from "express";
import {
  createAssetService,
  getAssetService,
  getAssetsService,
} from "../services/assetsService.js";

export async function getAssetsController(req: Request, res: Response) {
  const unityId: string = req.params.id;
  const assets = await getAssetsService(unityId);
  res.status(200).send(assets);
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
