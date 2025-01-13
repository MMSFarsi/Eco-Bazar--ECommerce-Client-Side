import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlinePhoneInTalk } from "react-icons/md";


const BottomNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-2 bg-gray-100 shadow-sm space-y-2 md:space-y-0">
      <div className="hidden sm:flex items-center">
  <button className="flex items-center text-sm px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
        clipRule="evenodd"
      />
    </svg>
    <span>All Categories</span>
    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.23a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>


      <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-xs md:text-base">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors ${
        isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
      }`
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/shop"
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors ${
        isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
      }`
    }
  >
    Shop
  </NavLink>
  <NavLink
    to="/addProduct"
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors ${
        isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
      }`
    }
  >
    Add Product
  </NavLink>
  <NavLink
  to="/pages"
  className={({ isActive }) =>
    `hidden sm:inline-block px-3 py-2 rounded-md transition-colors ${
      isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
    }`
  }
>
  Pages
</NavLink>
<NavLink
  to="/blog"
  className={({ isActive }) =>
    `hidden sm:inline-block px-3 py-2 rounded-md transition-colors ${
      isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
    }`
  }
>
  Blog
</NavLink>

  <NavLink
    to="/about-us"
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors ${
        isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
      }`
    }
  >
    About Us
  </NavLink>
  <NavLink
    to="/contact-us"
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors ${
        isActive ? "text-white bg-green-600" : "text-gray-700 hover:text-green-600"
      }`
    }
  >
    Contact Us
  </NavLink>
</div>


<div className="hidden sm:flex items-center gap-2 text-black text-sm md:text-base">
  <MdOutlinePhoneInTalk />
  <span>(218) 565-0184</span>
</div>

    </div>
  );
};

export default BottomNavbar;
