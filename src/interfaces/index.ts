import { ObjectId } from "mongodb";
import db from "../config/db";

export interface AuthInterface {
  email: string;
  password: string;
}

export interface UserData {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  image: string;
  admin: boolean;
}
