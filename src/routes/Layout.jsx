import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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

const RequireAuth = () => {

  const { currentUser } = useContext(AuthContext)
  
  useEffect(() => {
    <Navigate to="/login"/>
  },[currentUser])
  return (
    !currentUser ? <Navigate to="/login" /> :
     ( <div className=" container  m-auto ">
      <div className="" id="navbar">
        <Navbar />
      </div>
      <div className=" h-[calc(100vh-80px)] w-full" id="content">
        <Outlet />
      </div>
    </div>)
  );
};

// export default Layout;
export {Layout,RequireAuth}
