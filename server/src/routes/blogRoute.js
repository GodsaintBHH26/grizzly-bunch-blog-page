import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  deletePost,
  editPost,
  postCreation,
  showAllPosts,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/:authorId", showAllPosts);

// Create, Edit, delete post here
router.post("/create", authMiddleware, postCreation);
router.put("/edit/:slug", authMiddleware, editPost);
router.post("/delete/:slug", authMiddleware, deletePost);

export default router;
