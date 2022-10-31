import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      retryWrites: true,
      w: "majority",
    });

    console.log(`Database connection successful ${conn.connection.host}`);
  } catch (err) {
    console.log("Database connection failure", err.message);
    process.exit();
  }
};

export default dbConnection;
