import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      retryWrites: true,
      w: "majority",
    });

    console.log(
      `Order microservice connected to database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Database connection failure ${error}`);
    process.exit();
  }
};

export default dbConnection;
