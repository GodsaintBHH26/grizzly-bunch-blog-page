import mongoose from "mongoose";
import User from "./user.js";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogContent: { type: String },
    slug: { type: String, unique: true }, // For post identification
  },
  { timestamps: true }
);

// Function to pre-save the unique id for each post (slug)
blogSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    try {
      const user = await User.findById(this.author).select("uname");
      this.slug = slugify(`${this.title}-${user.uname}-${Date.now()}`, {
        lower: true,
        strict: true,
      });
    } catch (error) {
      return next(error);
    }
  }
  next();
});
export default mongoose.model("Blog", blogSchema);
