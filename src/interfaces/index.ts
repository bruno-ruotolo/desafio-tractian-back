import { ObjectId } from "mongodb";
import db from "../config/db";

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
