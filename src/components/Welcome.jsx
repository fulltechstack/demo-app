import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";


function Welcome() {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Welcome;
