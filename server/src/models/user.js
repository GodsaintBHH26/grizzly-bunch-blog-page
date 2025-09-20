import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uname: { type: String, required: true },
  uemail: { type: String, unique: true, required: true },
  upassword: { type: String, required: true },
});

export default mongoose.model("User", userSchema);