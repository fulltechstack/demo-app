import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryNavbar from "./CategoryNavbar";

function Welcome() {
  const currentRoute = useLocation();

  return (
    <div>
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
