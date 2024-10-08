import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./Routes/auth.route.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port 5000");
});
