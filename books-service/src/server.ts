import express from "express";
import dotenv from "dotenv";
import path from "path";
import dbConnection from "./config/database";

const app = express();

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

const PORT = 7000 || process.env.PORT;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Books microservice running on PORT ${PORT}`);
});
