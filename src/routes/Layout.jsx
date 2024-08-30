import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" container  m-auto ">
      <div className="" id="navbar">
        <Navbar />
      </div>
      <div className=" h-[calc(100vh-80px)] w-full" id="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
