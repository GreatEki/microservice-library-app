import express from "express";

const app = express();

const PORT = process.env || 7001;

app.listen(PORT, () =>
  console.log(`Customer microservice running on PORT ${PORT}`)
);
