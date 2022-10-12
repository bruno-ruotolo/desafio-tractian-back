import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db: Db = null;

try {
  const mongoClient = new MongoClient(process.env.MONGO_URI);
  await mongoClient.connect();
  db = mongoClient.db(process.env.DB_NAME);

  console.log("Data Base ON");
} catch (e) {
  console.log("Data Base OFF", e);
}

export default db;
