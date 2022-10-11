import Joi from "joi";

import { CreateAsset, CreateUnity } from "./../interfaces/index";

export const createAssetSchema = Joi.object<CreateAsset>({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  model: Joi.string().required(),
  owner: Joi.string().required(),
});

const assetsSchema = { createAssetSchema };

export default assetsSchema;
