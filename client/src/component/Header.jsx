import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaRegAddressCard, FaSignInAlt, FaCartPlus } from "react-icons/fa";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl">MySite</span>
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <FaHome /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <FaUserAlt /> About
        </Link>
        <Link to="/contact" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <FaRegAddressCard /> Contact
        </Link>
         <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600">
        <FaCartPlus size={24} />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          0
        </span>
      </Link>
        <Link to="/login" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <FaSignInAlt /> Login
        </Link>
      </nav>
    </header>
  );
}
