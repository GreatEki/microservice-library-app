import express from "express";
import dotenv from "dotenv";
import path from "path";
import databaseConnection from "./config/database";
import apiRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

app.use("/api/v1/customer-service", apiRoutes);

const PORT = process.env.PORT || 7001;

app.listen(PORT, async () => {
  await databaseConnection();
  console.log(`Customer microservice running on PORT ${PORT}`);
});
