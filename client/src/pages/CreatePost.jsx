import React, { useEffect, useState } from "react";
import api from '../components/api/axiosApi.js'
import { useAuth } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreatePost() {
  const auth = useAuth();
  const navigate=useNavigate()
  const [title, setTitle]=useState('');
  const [blogContent, setBlogContent]=useState('');


  const handlePost = async (e)=>{
    e.preventDefault();

    try {
      await api.post('/post/create', {title, blogContent})
      toast.success("Blog posted!")
    } catch (error) {
      console.log("Error Posting the blog: ",error.message);
      toast.error('Error posting the blog')
    }
  }
  useEffect(()=>{
    if(!auth.user) navigate('/login')
  })
  return (
    <>
      <div className="bg-white w-full min-h-132 py-5 flex justify-center items-center">
        <div className="rounded-2xl bg-white shadow-[0_0_30px_rgba(0,0,0,0.6)] w-3/5 min-h-118 p-5">
          <form onSubmit={handlePost} className=" rounded-xl w-full h-full flex flex-col p-5 gap-5 text-black text-3xl items-center">
            <h1 className="font-bold">Create Post</h1>
            <hr className="h-[1px] bg-black/60 w-full"/>
            <div className="flex flex-col text-black w-full">
              <label htmlFor="" className="text-2xl font-semibold">
                Title:
              </label>
              <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}} className="outline-2 p-3 rounded-lg text-xl" />
            </div>

            <div className="flex flex-col text-black gap-1 w-full">
                <label htmlFor="" className="text-2xl font-semibold">
                Content:
              </label>
              <textarea className="h-48 rounded-lg outline-2 p-2" value={blogContent} onChange={e=>{setBlogContent(e.target.value)}}></textarea>
            </div>

            <button type="submit" className="text-2xl bg-sky-600 p-2 px-5 w-full rounded-lg font-semibold text-white hover:bg-sky-900 duration-150 scroll-smooth">Post</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
