import Joi from "joi";

import { CreateUnity } from "./../interfaces/index";

export const createUnitySchema = Joi.object<CreateUnity>({
  name: Joi.string().required(),
});

const unitsSchema = { createUnitySchema };

export default unitsSchema;
