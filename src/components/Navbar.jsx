import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-600 text-white shadow-md">
            {/* Left: App Name */}
            <div className="text-2xl font-bold">
                <Link to="/">
                    LAWNSKY Mart
                </Link>

            </div>

            {/* Right: Links */}
            <div className="flex gap-6 text-lg">
                <Link to="/login">
                    Login
                </Link>
                <Link to="/cart">
                    Cart
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
