import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Context";

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
          <div className="flex gap-5 items-center">
            <NavLink to=''>
              {({ isActive }) => {
                return isActive?<i className="ri-home-fill text-blue-500"></i>:<i className="ri-home-line"></i>;
              }}
            </NavLink>
            <NavLink>
              <i class="ri-add-circle-line"></i>
            </NavLink>

            
            <NavLink>
              <i className="ri-account-circle-line"></i>
            </NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
