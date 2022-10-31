import express from "express";
import dotenv from "dotenv";
import path from "path";
import dbConnection from "./config/database";
import apiRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

app.use("/api/v1/book-service", apiRoutes);

const PORT = 7000 || process.env.PORT;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Books microservice running on PORT ${PORT}`);
});
