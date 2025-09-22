import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectdb();

// Turning the routes on ------
app.use("/api/auth", authRoute);
app.use("/api/post", blogRoute);

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => {
  console.log("Connection running on port: ", PORT);
});
