import Joi from "joi";

import {
  CreateAsset,
  CreateUnity,
  UpdateHealth,
  UpdateStatus,
} from "./../interfaces/index";

export const createAssetSchema = Joi.object<CreateAsset>({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  model: Joi.string().required(),
  owner: Joi.string().required(),
  unityId: Joi.string().required(),
});

export const updateHealth = Joi.object<UpdateHealth>({
  health: Joi.number().min(0).max(100).required(),
  assetId: Joi.string().required(),
});

export const updateStatus = Joi.object<UpdateStatus>({
  status: Joi.string().min(0).max(100).required(),
  assetId: Joi.string().required(),
});

const assetsSchema = { createAssetSchema, updateHealth, updateStatus };

export default assetsSchema;
