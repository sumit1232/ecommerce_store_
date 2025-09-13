import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaRegAddressCard, FaSignInAlt, FaCartPlus } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useState, useRef, useEffect } from "react";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
    // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8"/>
        <span className="font-bold text-xl">MySite</span>
      </div> 
      </Link>
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

<div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
      >
        <FaSignInAlt />
        Login
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => setIsOpen(false)}
          >
            View Profile
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              // Add your logout logic here
              alert("Logged out");
            }}
            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>


      </nav>
    </header>
  );
}
