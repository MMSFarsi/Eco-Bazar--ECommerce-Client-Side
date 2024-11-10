import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Shopery</h3>
          <p className="text-gray-400 text-sm mb-4">
            Morbi cursus porttitor enim lobortis malesuada. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <p className="text-green-500 mb-2">(219) 555-0114</p>
          <p className="text-green-500">Proxy@gmail.com</p>
        </div>

        {/* My Account Section */}
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

        {/* Helps Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Helps</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Proxy Section */}
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

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 mt-10 text-gray-400 text-sm">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a href="#" className="text-green-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-green-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-green-500">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" className="text-green-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center">
          Ecobazaar eCommerce © 2021. All Rights Reserved
        </p>

        {/* Payment Icons */}
        <div className="flex space-x-4">
          <img src="/path/to/apple-pay-icon.png" alt="Apple Pay" className="h-5" />
          <img src="/path/to/visa-icon.png" alt="Visa" className="h-5" />
          <img src="/path/to/mastercard-icon.png" alt="MasterCard" className="h-5" />
          <img src="/path/to/secure-payment-icon.png" alt="Secure Payment" className="h-5" />
        </div>
      </div>

      {/* Mobile App Download */}
      <div className="container mx-auto flex flex-col items-center mt-8 px-6">
        <h3 className="text-lg font-semibold mb-4">Download our Mobile App</h3>
        <div className="flex space-x-4">
          <a href="#">
            <img src="/path/to/app-store-icon.png" alt="App Store" className="h-10" />
          </a>
          <a href="#">
            <img src="/path/to/google-play-icon.png" alt="Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
