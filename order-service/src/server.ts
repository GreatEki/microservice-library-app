import express from "express";

const app = express();

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Order microservice is running on PORT ${PORT}`);
});
