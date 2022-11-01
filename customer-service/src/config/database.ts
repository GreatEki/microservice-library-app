import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      retryWrites: true,
      w: "majority",
    });

    console.log(
      `Customer microservice connected to database successfully ${conn.connection.host}`
    );
  } catch (err) {
    console.log("Database connection failure:", err);
    process.exit();
  }
};

export default databaseConnection;
