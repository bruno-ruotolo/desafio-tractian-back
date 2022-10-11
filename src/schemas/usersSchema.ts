import Joi from "joi";

import {
  CreateUser,
  DeleteUserOrCompany,
  UpdateUser,
} from "./../interfaces/index";

const createUser = Joi.object<CreateUser>({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  companyId: Joi.string().required(),
  manager: Joi.boolean().required(),
});

const updateUser = Joi.object<UpdateUser>({
  id: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  companyId: Joi.string().required(),
  manager: Joi.boolean().required(),
});

const deleteUser = Joi.object<DeleteUserOrCompany>({
  id: Joi.string().required(),
});

const userSchema = { createUser, deleteUser, updateUser };

export default userSchema;
