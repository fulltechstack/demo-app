import React from "react";

const FashionSidePanel = () => {
  return (
    <div className="fixed top-20 left-0 h-[calc(100%-5rem)] w-64 bg-blue-100 shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <ul className="space-y-4">
        <li className="cursor-pointer hover:underline text-blue-700">Men</li>
        <li className="cursor-pointer hover:underline text-blue-700">Women</li>
        <li className="cursor-pointer hover:underline text-blue-700">Kids</li>
        <li className="cursor-pointer hover:underline text-blue-700">
          Accesories
        </li>
      </ul>
    </div>
  );
};

export default FashionSidePanel;
