import express from "express";
import path from "path";
import dotenv from "dotenv";
import dbConnection from "./config/database";
import apiRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

app.use("/api/v1/order-service", apiRoutes);

const PORT = process.env.PORT || 7002;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Order microservice is running on PORT ${PORT}`);
});
