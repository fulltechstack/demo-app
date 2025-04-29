import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/AuthContext";

function Navbar() {
  let navbarContext = useContext(authContext);
  console.log("Navbar", navbarContext);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-600 text-white shadow-md">
      {/* Left: App Name */}
      <div className="text-2xl font-bold">
        <Link to="/">LAWNSKY Mart</Link>
      </div>

      {/* Right: Links */}
      <div className="flex gap-6 text-lg">
        {navbarContext?.user?.isLoggedIn ? (
          <span>{navbarContext.user.firstname}</span>
        ) : (
          <Link to="/account/login">Login</Link>
        )}
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
