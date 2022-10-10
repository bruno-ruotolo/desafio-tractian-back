import Joi from "joi";

import { CreateCompany } from "./../interfaces/index";

export const companiesSchema = Joi.object<CreateCompany>({
  name: Joi.string().required(),
});
