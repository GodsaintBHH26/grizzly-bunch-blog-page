import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/Context";
import { Link } from "react-router-dom";

function Signup() {
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [upassword, setUpassword] = useState("");
  const auth = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth.registerUser(uname, uemail, upassword);
      toast.success("Successfully register user.");
    } catch (error) {
      console.log("Error registering the user", error.message);
      toast.error("Error Signing up");
    }
  };
  return (
    <>
      <div className="bg-white w-full h-132 flex justify-center items-center">
        <div className="bg-black/30 w-128 h-118 rounded-lg shadow-lg text-xl flex flex-col text-black">
          <div className="p-2 flex flex-col items-center w-full">
            <h1 className="font-bold text-5xl">Register</h1>
            <p className="text-lg">Sign up today.</p>
          </div>

          <div className="px-5 h-full flex flex-col ">
            <form
              action=""
              onSubmit={handleRegister}
              className="hover:bg-white duration-300 scroll-smooth px-5 flex flex-col rounded-lg py-2"
            >
              <div className="flex flex-col gap-3 font-semibold">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">User Name: </label>
                  <input
                    type="text"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    className="border-2 p-1 rounded font-normal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Email: </label>
                  <input
                    type="email"
                    value={uemail}
                    onChange={(e) => setUemail(e.target.value)}
                    className="border-2 p-1 rounded font-normal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Password: </label>
                  <input
                    type="password"
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
              Already have an account? Login{" "}
              <Link
                className="text-orange-700 hover:underline hover:text-blue-700"
                to="/login"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
