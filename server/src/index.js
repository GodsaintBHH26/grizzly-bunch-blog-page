import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectdb();

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => {
  console.log("Connection running on port: ", PORT);
});
