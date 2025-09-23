import React from "react";

function BlogFeedCard({ uname, title, blogContent, postDate }) {
  return (
    <>
      <div className="text-black text-2xl flex flex-col justify-between">
        <div>
          <div className="mb-5">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="text-lg font-semibold">{uname}</p>
          </div>
          <div className="">
            <p>{blogContent}</p>

            <p className="text-lg mt-5 text-gray-800">Posted on: {postDate}</p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
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
    </>
  );
}

export default BlogFeedCard;
