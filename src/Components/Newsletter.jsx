import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <div className="bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 text-sm mt-1">Stay updated with our latest news and products. Subscribe now to receive updates!</p>
                </div>

                {/* Input and Subscribe Button */}
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-2">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full md:w-80 p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full md:w-auto bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-200"
                    >
                        Subscribe
                    </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 text-gray-600">
                    <FaFacebook className="w-6 h-6 hover:text-green-500 cursor-pointer" />
                    <FaTwitter className="w-6 h-6 hover:text-green-500 cursor-pointer" />
                    <FaPinterest className="w-6 h-6 hover:text-green-500 cursor-pointer" />
                    <FaInstagram className="w-6 h-6 hover:text-green-500 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
