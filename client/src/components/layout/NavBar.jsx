import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Context";
import Logout from "../UI/custom-components/Logout";

function NavBar() {
  const auth = useAuth();

  return (
    <>
      <div className="h-14 bg-white/80 text-black">
        <div className="text-3xl flex justify-between items-center px-5 h-full">
          <Link to="/">
            <img
              src="/page-img/grizzly-bunch-logo.png"
              alt=""
              className="w-10"
            />
          </Link>
          <div className="w-1/2 flex justify-between">
            <div className="flex gap-5 outline-2 px-2 rounded-lg text-lg w-96 justify-between outline-zinc-500">
              <input type="text" className=" focus:outline-none w-72" />
              <button>
                <i className="ri-search-line"></i>
              </button>
            </div>

            <div className="flex gap-5 items-center">
              <NavLink to="/feed">
                {({ isActive }) => {
                  return isActive ? (
                    <i className="ri-home-fill"></i>
                  ) : (
                    <i className="ri-home-line"></i>
                  );
                }}
              </NavLink>
              <NavLink to="/create">
                {({ isActive }) => {
                  return isActive ? (
                    <i className="ri-add-circle-fill"></i>
                  ) : (
                    <i className="ri-add-circle-line"></i>
                  );
                }}
              </NavLink>

              <NavLink to="/account">
                {({ isActive }) => {
                  return isActive ? (
                    <i className="ri-account-circle-fill"></i>
                  ) : (
                    <i className="ri-account-circle-line"></i>
                  );
                }}
              </NavLink>

              {auth.token ? <Logout /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
