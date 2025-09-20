import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to the host: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ Couldn't connect to the database ", error.message);
    process.exit(1);
  }
};

export default connectdb