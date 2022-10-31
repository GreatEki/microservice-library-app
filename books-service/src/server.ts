import express from "express";

const app = express();

const PORT = 7000 || process.env.PORT;

app.listen(PORT, () =>
  console.log(`Books microservice running on PORT ${PORT}`)
);
