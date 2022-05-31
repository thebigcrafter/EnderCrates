import { MongoClient } from "mongodb";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(url).connect();

export default client;