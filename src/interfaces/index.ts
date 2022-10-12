import { ObjectId } from "mongodb";

export interface Login {
  email: string;
  password: string;
}

export interface CreateUser {
  email: string;
  password: string;
  name: string;
  companyId: string;
  manager: boolean;
}

export interface UpdateUser {
  id: string;
  email: string;
  password: string;
  name: string;
  companyId: string;
  manager: boolean;
}

export interface UserData {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  image: string;
  manager: boolean;
  companies: number[];
}

export interface CreateCompany {
  name: string;
}

export interface CreateUnity {
  name: string;
}

export interface CreateAsset {
  title: string;
  image: string;
  description: string;
  model: string;
  owner: string;
  unityId: string;
}

export interface DeleteUserOrCompany {
  id: string;
}

export interface UpdateHealth {
  health: number;
  assetId: string;
}

export interface UpdateStatus {
  status: string;
  assetId: string;
}
