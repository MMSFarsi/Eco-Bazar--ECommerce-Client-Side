import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
     
        <div>
          <h3 className="text-lg font-semibold mb-4">About Shopery</h3>
          <p className="text-gray-400 text-sm mb-4">
          "Shop smarter, save more! Discover unbeatable deals, top-quality products, and a seamless shopping experience—all in one place. Your satisfaction is our priority!"
          </p>
          <p className="text-green-500 mb-2">+880 1619-547037</p>
          <p className="text-green-500">mirsalmanfarsi@gmail.com</p>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Settings</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Helps</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Proxy</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Product Details</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>

 
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 mt-10 text-gray-400 text-sm">
    
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="#" className="text-green-500">
           <FaFacebook></FaFacebook>
          </a>
          <a href="#" className="text-green-500">
           <FaTwitter></FaTwitter>
          </a>
          <a href="#" className="text-green-500">
           <FaLinkedin></FaLinkedin>
          </a>
          <a href="#" className="text-green-500">
          <FaGithub></FaGithub>
          </a>
        </div>

    
        <p className="text-center">
          Ecobazaar eCommerce © 2025. All Rights Reserved
        </p>

        
    
        <div className="flex space-x-4">
          <img src="https://i.ibb.co.com/nsW8jKN/Method-Apple-Pay.png
" alt="Apple Pay" className="h-5" />
          <img src="https://i.ibb.co.com/sj6yvPL/Method-Visa.png
" alt="Visa" className="h-5" />
          <img src="https://i.ibb.co.com/0std4Cw/Method-Mastercard.png" alt="MasterCard" className="h-5" />
          <img src="https://i.ibb.co.com/YfdTMPM/Method-Discover.png
" alt="Secure Payment" className="h-5" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center mt-8 px-6">
        <h3 className="text-lg font-semibold mb-4">Download our Mobile App</h3>
        <div className="flex space-x-4">
          <a href="#">
            <img src="https://i.ibb.co.com/QF0CSJQ/App-Store.png" alt="App Store" className="h-10" />
          </a>
          <a href="#">
            <img src="https://i.ibb.co.com/rbfDj5s/Google-Play.png" alt="Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
