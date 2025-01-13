import { Link } from "react-router-dom";
import logo from "/public/images/favIcon.png";
const Newsletter = () => {
    return (
        <div className="bg-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
               <div className="flex items-center mr-8 justify-center md:justify-start">
                     <img src={logo} alt="Logo" className="h-8 mr-2" />
                     <Link to="/">
                       <span className="text-lg font-semibold text-green-600">Ecobazar</span>
                     </Link>
                   </div>
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 text-xs mt-1">Stay updated with our latest news and products. Subscribe now to receive updates!</p>
                </div>

                <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-2">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full md:w-62 p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full md:w-auto bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-200"
                    >
                        Subscribe
                    </button>
                </div>

               
            </div>
        </div>
    );
};

export default Newsletter;
