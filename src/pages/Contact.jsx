import React from 'react';
import Newsletter from '../Components/Newsletter';

const Contact = () => {
    return (
       <div>
         <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md">
            {/* Contact Info */}
            <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 space-y-6">
                <div className="text-center">
                    <div className="text-green-500 text-3xl mb-2">📍</div>
                    <p className="text-gray-700">2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
                <div className="text-center">
                    <div className="text-green-500 text-3xl mb-2">✉️</div>
                    <p className="text-gray-700">Proxy@gmail.com</p>
                    <p className="text-gray-700">Help.proxy@gmail.com</p>
                </div>
                <div className="text-center">
                    <div className="text-green-500 text-3xl mb-2">📞</div>
                    <p className="text-gray-700">(219) 555-0114</p>
                    <p className="text-gray-700">(164) 333-0487</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Just Say Hello!</h2>
                <p className="text-gray-600 mb-6">Do you fancy saying hi to me or you want to get started with your project and need my help? Feel free to contact me.</p>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Subjects" 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    />
                    <textarea 
                        placeholder="Message" 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 h-32"
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white font-semibold p-3 rounded hover:bg-green-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        <Newsletter></Newsletter>
       </div>
    );
};

export default Contact;
