import Joi from "joi";

import { Login, CreateUser } from "./../interfaces/index";

const loginSchema = Joi.object<Login>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const createUser = Joi.object<CreateUser>({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  companyId: Joi.string().required(),
  manager: Joi.boolean().required(),
});

const authSchema = { loginSchema, createUser };

export default authSchema;
