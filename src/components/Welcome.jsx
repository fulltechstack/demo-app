import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryNavbar from "./CategoryNavbar";
import { ToastContainer } from "react-toastify";

function Welcome() {
  const currentRoute = useLocation();

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <CategoryNavbar />
      {currentRoute.pathname === "/" ? <Banner /> : <></>}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Welcome;
