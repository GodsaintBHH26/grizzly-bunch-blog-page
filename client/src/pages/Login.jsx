import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import { toast } from "react-toastify";

function Login() {
  const [uemail, setUemail] = useState("");
  const [upassword, setUpassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.loginUser(uemail, upassword);
      toast.success("Login Successfull");
      close();
    } catch (error) {
      console.log("Login failed ❌", error);
      toast.error(`Login failed! Check your credentials`);
    }
  };
  const close = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="bg-white w-full h-132 flex justify-center items-center">
        <div className="bg-black/30 w-128 h-118 rounded-lg shadow-lg text-xl flex flex-col text-black gap-2">
          <div className="p-5 flex flex-col items-center w-full">
            <h1 className="font-bold text-5xl">Login</h1>
            <p className="text-lg">Use your credentials to login.</p>
          </div>

          <div className="p-5 pt-2 h-full flex flex-col justify-between">
            <form
              action=""
              onSubmit={handleLogin}
              className="hover:bg-white duration-300 scroll-smooth p-5 flex flex-col rounded-lg"
            >
              <div className="flex flex-col gap-5 font-semibold">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Email: </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    value={uemail}
                    onChange={(e) => setUemail(e.target.value)}
                    className="border-2 p-1 rounded font-normal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Password: </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    value={upassword}
                    onChange={(e) => setUpassword(e.target.value)}
                    className="border-2 p-1 rounded font-normal focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 hover:bg-blue-700 bg-blue-500 font-semibold text-xl p-2 text-white rounded-lg"
              >
                Submit
              </button>
            </form>
            <p>
              Don't have an account? Register{" "}
              <Link className="text-orange-700 hover:underline hover:text-blue-700">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
