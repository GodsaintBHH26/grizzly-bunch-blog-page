import mongoose from "mongoose";
import blog from "../models/blog.js";

// Creating a blog --------------------->
export const postCreation = async (req, res) => {
  const { title, blogContent } = req.body;

  if (!title || !blogContent) {
    return res
      .status(400)
      .json({ msg: "Title and content is required for the post to be made‼️" });
  }

  try {
    const newPost = new blog({
      title: title,
      author: req.user.uid,
      blogContent: blogContent,
    });
    await newPost.save();
    res.status(201).json({ msg: "Post created", newPost });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Editing a already created blog ----------------->
export const editPost = async (req, res) => {
  const { title, blogContent } = req.body;
  const { slug } = req.params;
  const existingPost = await blog.findOne({ slug });
  if (!existingPost) {
    return res.status(404).json({ msg: "Post doesn't exist ⛔" });
  }
  try {
    if (title) {
      if (title !== existingPost.title) existingPost.title = title;
    }
    if (blogContent) {
      if (blogContent !== existingPost.blogContent)
        existingPost.blogContent = blogContent;
    }
    await existingPost.save();
    res.status(200).json({ msg: "Post edited successfully 💯", existingPost });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Fetching blogs from the database ----------------->
// Fetching all blogs of a single user -------->
export const showAllPosts = async (req, res) => {
  const { authorId } = req.params;
  try {
    const posts = await blog
      .find({ author: authorId })
      .select("author title blogContent slug createdAt updatedAt")
      .sort({ createdAt: -1 })
      .populate("author", "uname");
    res.status(200).json({ msg: "Fetched all the posts 📤", posts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// Fetching recent blogs ------------------->
export const showRecentPosts = async (req, res) => {
  try {
    const posts = await blog
      .find()
      .select("author title blogContent slug createdAt updatedAt")
      .sort({ createdAt: -1 }).limit(10)
      .populate("author", "uname");
    res.status(200).json({ msg: "Fetched all recent posts 📤", posts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// Fetching A single post from the database ---------->
export const showThisPost = async (req, res)=>{
  const {slug}=req.params;

  try {
    const post = await blog.findOne({slug}).select('author title blogContent slug createdAt updatedAt').populate('author', 'uname');
    if(!post) return res.status(404).json({msg:'Post not found ⛔'});
    res.status(200).json({msg:"Post fetched successfully ✅", post});
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

// Deleting a post/blog by the user --------------->
export const deletePost = async (req, res) => {
  const { slug } = req.params;
  try {
    const post = await blog.findOne({ slug: slug });
    if (!post) {
      return res.status(404).json({ msg: "Post not found ⛔" });
    }
    if (post.author.toString() !== req.user.uid) {
      return res.status(403).json({ msg: "You are not allowed to delete this post 🚫" });
    }
    await post.deleteOne();
    res.status(200).json({ msg: "Post deleted succsefully 🧹", post });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
