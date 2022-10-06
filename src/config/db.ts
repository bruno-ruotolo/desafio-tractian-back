import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db = null;

(async () => {
  try {
    const mongoClient = new MongoClient(process.env.MONGO_URL);
    await mongoClient.connect();
    db = mongoClient.db(process.env.BANCO);

    console.log("Data Base ON");
  } catch (e) {
    console.log("Data Base OFF", e);
  }
})();

export default db;
