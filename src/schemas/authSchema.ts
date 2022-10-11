import Joi from "joi";

import { Login } from "./../interfaces/index";

const loginSchema = Joi.object<Login>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const authSchema = { loginSchema };

export default authSchema;
