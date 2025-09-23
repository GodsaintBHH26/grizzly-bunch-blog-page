import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  deletePost,
  editPost,
  postCreation,
  showAllPosts,
  showRecentPosts,
  showThisPost,
} from "../controllers/blogController.js";

const router = express.Router();

// Fetch posts here
router.get("/recent", showRecentPosts);
router.get("/author/:authorId", showAllPosts);
router.get("/slug/:slug", showThisPost);


// Create, Edit, delete post here
router.post("/create", authMiddleware, postCreation);
router.put("/edit/:slug", authMiddleware, editPost);
router.post("/delete/:slug", authMiddleware, deletePost);

export default router;
