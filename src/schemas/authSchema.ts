import Joi from "joi";
import { AuthInterface } from "../interfaces";

const authSchema = Joi.object<AuthInterface>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default authSchema;
