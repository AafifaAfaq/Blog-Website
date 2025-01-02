/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-white border-x-2 border-rose-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          
          {/*Blog */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-medium text-rose-500 tracking-widest text-lg mb-6">Blog</h2>
            <nav className="list-none space-y-4">
              <li>
                <a className="text-gray-700 hover:text-rose-500 text-sm">AI in Healthcare</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-rose-500 text-sm">AI in Business</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-rose-500 text-sm">Artificial Intelligence:The Road Ahead</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-rose-500 text-sm">Agentic AI</a>
              </li>
            </nav>
          </div>

          {/* About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-medium text-rose-500 tracking-widest text-lg mb-6">ABOUT SMARTIFY AI</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Dive into the world of Artificial Intelligence with expert insights, tutorials, and news. 
              Explore AI's potential to revolutionize industries and improve everyday life.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay updated with the latest trends in AI technology and its practical applications in real-world scenarios.
            </p>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-medium text-rose-500 tracking-widest text-lg mb-6">STAY CONNECTED</h2>
            <p className="text-gray-600 text-sm mb-4">Subscribe to get the latest updates on AI, straight to your inbox.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-100 text-gray-700 border border-rose-400 focus:ring-2 focus:ring-rose-400 rounded py-2 px-4 text-sm"
              />
              <button className="bg-rose-400 text-white px-6 py-2 rounded hover:bg-rose-500 transition duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-rose-400">
        <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between items-center">
          <p className="text-white text-sm text-center sm:text-left">
            © 2025 Smartify AI — Powered by AI Enthusiasts
          </p>
          <div className="flex space-x-4">
            <a href="" className="text-white hover:text-rose-100">
              <FaTwitter />
            </a>
            <a href="" className="text-white hover:text-rose-100">
              <FaFacebook />
            </a>
            <a href="" className="text-white hover:text-rose-100">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
