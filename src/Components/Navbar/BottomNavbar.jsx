import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePhoneInTalk } from "react-icons/md";


const BottomNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-2 bg-gray-100 shadow-sm space-y-2 md:space-y-0">
      {/* All Categories Dropdown */}
      <div className="flex items-center">
        <button className="flex items-center px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
          </svg>
          <span>All Categories</span>
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.23a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6 text-sm md:text-base">
        <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
        <Link to="/shop" className="text-gray-700 hover:text-green-600">Shop</Link>
        <Link to="/pages" className="text-gray-700 hover:text-green-600">Pages</Link>
        <Link to="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
        <Link to="/about-us" className="text-gray-700 hover:text-green-600">About Us</Link>
        <Link to="/contact-us" className="text-gray-700 hover:text-green-600">Contact Us</Link>
      </div>

      {/* Contact Info */}
      <div className="flex items-center gap-2 text-black text-sm md:text-base">
      <MdOutlinePhoneInTalk />
        
        <span>(218) 565-0184</span>
      </div>
    </div>
  );
};

export default BottomNavbar;
