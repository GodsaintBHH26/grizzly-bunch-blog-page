import React, { useEffect, useState } from "react";
import api from "../components/api/axiosApi";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/Context";
import { toast } from "react-toastify";

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      const post = await api.get(`/post/slug/${slug}`);
      setPost(post.data.post);
    } catch (error) {
      console.error("Error fetching post:", error.message);
      toast.error("Could not load the post");
    }
  };
  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await api.post(`/post/delete/${post.slug}`);
      toast.success("Post deleted successfully 🧹");
      navigate(`/account`);
    } catch (error) {
      console.log("Error deleting post.", error.message);
      toast.error("Failed to delete the post");
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <div className="w-full min-h-128 flex justify-center items-center">
        <div className="bg-white w-4/5 h-108 shadow-lg rounded-xl text-black p-5 relative flex flex-col justify-between">
          {auth.user && post?.author._id === auth.user.uid && (
            <div className="absolute flex gap-4 text-3xl right-10 top-10">
              <i
                className="ri-delete-bin-line hover:text-red-600"
                onClick={handleDeletePost}
              ></i>
              <i className="ri-edit-2-line hover:text-blue-600"></i>
            </div>
          )}

          <div>
            <div className="p-5">
              <h1 className="text-6xl font-bold">{post?.title}</h1>
              <p className="text-lg p-2 font-semibold">{post?.author.uname}</p>
            </div>

            <div className="p-5">
              <p className="text-3xl">{post?.blogContent}</p>
              <p className="pt-2">Date: {post?.createdAt.split("T")[0]}</p>
            </div>
          </div>

          <div className="flex gap-5 m-5 text-lg">
            <button className="hover:text-pink-500 cursor-pointer">
              <i className="ri-heart-line"></i>Like
            </button>
            <button className="hover:text-sky-500 cursor-pointer">
              <i className="ri-chat-1-line"></i>Comment
            </button>
            <button className="hover:text-emerald-500 cursor-pointer">
              <i className="ri-share-forward-line"></i>Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
