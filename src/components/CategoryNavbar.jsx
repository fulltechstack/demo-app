import React from "react";
import { Link } from "react-router-dom"; // assuming you're using react-router for navigation

const CategoryNavbar = () => {
  return (
    <nav className="flex justify-center space-x-8 p-4 bg-blue-100 shadow-md rounded-2xl">
      <Link
        to="/electronics"
        className="text-blue-700 font-semibold hover:underline"
      >
        Electronics
      </Link>
      <Link
        to="/household"
        className="text-blue-700 font-semibold hover:underline"
      >
        Household
      </Link>
      <Link
        to="/fashion"
        className="text-blue-700 font-semibold hover:underline"
      >
        Fashion
      </Link>
    </nav>
  );
};

export default CategoryNavbar;
