import React from 'react';
import { Link } from 'react-router-dom';
import { PiHandbagSimpleLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import logo from "../../../public/images/favIcon.png"

const MiddleNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-2 bg-white shadow-md space-y-2 md:space-y-0">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <Link to='/'>
          <span className="text-lg font-semibold text-green-600">Ecobazar</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full md:w-1/2">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm md:text-base"
        />
        <button className="px-2 md:px-4 py-2 text-white bg-green-500 rounded-r-md hover:bg-green-600 text-sm md:text-base">
          Search
        </button>
      </div>

      {/* Wishlist and Cart */}
      <div className="flex items-center space-x-4">
        {/* Wishlist Icon */}
        <button aria-label="Wishlist" className="text-2xl border-r-2 pr-3 hover:text-green-500">
        <IoIosHeartEmpty />
        </button>

        {/* Shopping Cart Icon */}
        <div className="flex items-center">
       <span className=' text-black text-2xl mr-2'><PiHandbagSimpleLight /> </span> 
          <div className='grid'>
          <p className="">Shopping cart</p>
          <p className="ml-1 ">$57.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
