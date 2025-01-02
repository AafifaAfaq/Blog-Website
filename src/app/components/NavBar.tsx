'use client'
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = () => {
    setIsMenuOpen(false); // Close the menu on navigation
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-rose-500">
          Smartify AI
        </a>

        {/* Navigation Links */}
<nav
  className={`${
    isMenuOpen ? "flex" : "hidden"
  } text-center flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0`} 
>
  <a href="/" className="text-gray-700 hover:text-gray-900">
    Home
  </a>
  <a href="/about" className="text-gray-700 hover:text-gray-900">
    About
  </a>
  <a href="/blog" className="text-gray-700 hover:text-gray-900">
    Blog
  </a>
  <a href="/review" className="text-gray-700 hover:text-gray-900">
    Reviews
  </a>
  <a href="/contact" className="text-gray-700 hover:text-gray-900">
    Contact
  </a>
</nav>


        {/* Social Icons and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-red-700">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-900">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">
            <FaFacebook />
          </a>
          <button className="bg-rose-400 text-white px-4 py-2 rounded-lg  hover:bg-red-400">
            Start Exploring
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default NavBar;
