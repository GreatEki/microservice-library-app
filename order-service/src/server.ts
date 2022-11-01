import express from "express";
import path from "path";
import dotnenv from "dotenv";
import dbConnection from "./config/database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotnenv.config({ path: path.resolve(__dirname, "./config/config.env") });

const PORT = process.env.PORT || 7002;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Order microservice is running on PORT ${PORT}`);
});
