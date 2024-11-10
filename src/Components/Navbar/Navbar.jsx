import { IoLocationOutline } from "react-icons/io5";
import BannerBg from "../../../public/images/bannerBg.png"

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:px-28 px-4 py-2 bg-slate-950 text-white">
      <div className="text-center flex items-center md:text-left mb-2 md:mb-0">
        <span><IoLocationOutline /></span>
        <p className="ml-2">  Store Location: Lincoln-344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <div>
          <select aria-label="Language" className="bg-slate-950 text-white">
            <option value="en">Eng</option>
            <option value="es">Esp</option>
            <option value="fr">Fr</option>
          </select>
        </div>
        
        <div>
          <select aria-label="Currency" className="bg-slate-950 text-white">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
        
        <div>
          <a href="#" aria-label="Sign in">Sign in</a>
          <span> | </span>
          <a href="#" aria-label="Sign up">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
