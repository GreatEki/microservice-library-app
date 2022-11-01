import express from "express";
import dotenv from "dotenv";
import path from "path";
import databaseConnection from "./config/database";

const app = express();

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });
const PORT = process.env.PORT || 7001;

app.listen(PORT, async () => {
  await databaseConnection();
  console.log(`Customer microservice running on PORT ${PORT}`);
});
