import mongoose from "mongoose";
import "dotenv/config";

const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database Connected");
  } catch (error) {
    console.log("❌ Failed to connect to Database:", error.message);
  }
};

export default ConnectToDB;
