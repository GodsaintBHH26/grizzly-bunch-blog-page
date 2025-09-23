import React, { useEffect, useState } from "react";
import AnimatedList from "../components/UI/react-bits/AnimatedList";
import api from "../components/api/axiosApi";
import { useAuth } from "../context/Context";
import { toast } from "react-toastify";
import ErrorScreen from "../components/UI/custom-components/ErrorScreen";
import { useNavigate, Link } from "react-router-dom";

function UserAccount() {
  const [myPosts, setMyPosts] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();
  const loadMyPost = async () => {
    try {
      const posts = await api.get(`/post/author/${auth.user.uid}`);
      console.log(posts.data.posts);
      setMyPosts(posts.data.posts);
    } catch (error) {
      console.log("Error fetching user posts", error.message);
      toast.error("Error fetching post");
    }
  };


  useEffect(() => {
    if (auth.loading) {
      if (!auth.user) {
        navigate("/login");
      }
    }
    loadMyPost();
  }, []);
  return (
    <>
      {auth.user ? (
        <div className="bg-white w-full min-h-128 relative">
          <div className="bg-[url(/page-img/user_cover.jpg)] bg-cover w-full h-58 bg-[position:60%_40%] border-b-2 border-black"></div>
          <div className="bg-black absolute w-36 h-36 rounded-full top-40 left-10 overflow-hidden outline-2 outline-blue-600 ">
            <img src="/page-img/user_profile_pic.jpg" alt="" />
          </div>
          <div className="text-black ml-50 p-5">
            <div>
              <h1 className="text-3xl font-semibold">{auth.user.uname}</h1>
              <p>{auth.user.uemail}</p>
            </div>

            <div className="py-5">
              <h1 className="text-3xl">Posts</h1>
              <AnimatedList
                items={myPosts.map((e) => {
                  return <Link to={`/posts/${e.slug}`}>{e.title}</Link>;
                })}
              />
            </div>
          </div>
        </div>
      ) : (
        <ErrorScreen />
      )}
    </>
  );
}

export default UserAccount;
