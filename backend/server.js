import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectToDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect DB & Cloudinary
ConnectToDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admin", adminRouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("API WORKING 🚀");
});

app.listen(port, () => console.log(`✅ Server started on port ${port}`));
