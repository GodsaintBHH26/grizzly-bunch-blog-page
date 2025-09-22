import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import FootDown from "./FootDown";

function AppLayout() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <NavBar />
        <Outlet />
        <FootDown />
      </div>
    </>
  );
}

export default AppLayout;
