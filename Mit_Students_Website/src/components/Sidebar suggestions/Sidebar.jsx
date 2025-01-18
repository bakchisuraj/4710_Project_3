import React from "react";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Beauty",
    "Sports",
    "Toys",
    "Automotive",
    
  ];

  return (
    <div
      className={`lg:block w-64 bg-gray-100 p-5 border-r border-gray-300 ${
        sidebarOpen ? "fixed inset-0 z-50" : "hidden"
      } lg:relative lg:w-64`}
    >
      <button
        className="lg:hidden absolute top-4 right-4"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer text-lg rounded-md transition-colors duration-200 hover:bg-gray-200"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
