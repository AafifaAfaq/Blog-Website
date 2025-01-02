/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ABOUT = () => {
  return (
    <section className="bg-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-6 mb-16">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Welcome to Smartify AI
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your go-to place for understanding, exploring, and embracing the world of Artificial Intelligence.
        </p>
        <Image
          src="/about.webp"  // Use a striking hero image
          alt="Smartify AI"
          className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
        />
       
       
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          At Smartify AI, we are passionate about making AI accessible and understandable for all. Our mission is to break down complex AI concepts and provide practical insights into how AI is reshaping industries. 
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Whether you're a developer, entrepreneur, or just someone curious about AI, we’re here to guide you through this exciting technology.
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-rose-400 text-white px-6 py-3 rounded-lg hover:bg-rose-500 transition duration-300">
            <Link href="/blog">Explore Our Blog</Link>
          </button>
          <button className="border-2 border-rose-400 text-rose-400 px-6 py-3 rounded-lg hover:bg-rose-400 hover:text-white transition duration-300">
            <Link href="/contact">Get in Touch</Link>
          </button>
        </div>
      </div>

      
      {/* Meet the Team Section */}
      <div className="container mx-auto text-center px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-rose-100 border-2 border-rose-400 rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
            <Image
              src="/pic3.webp"
              alt="John Doe"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
            <p className="text-gray-500 mt-3">
              Passionate about AI’s potential to revolutionize industries and drive societal change.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-rose-100 border-2 border-rose-400 rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
            <Image
              src="/pic2.jpg"
              alt="Jane Smith"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-600">Chief Technology Officer</p>
            <p className="text-gray-500 mt-3">
              Leading the charge in AI innovation and bringing cutting-edge technologies to life.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-rose-100 border-2 border-rose-400 rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
            <Image
              src="/pic1.jpg"
              alt="Alice Johnson"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
            <p className="text-sm text-gray-600">Lead AI Researcher</p>
            <p className="text-gray-500 mt-3">
              Driving AI research forward with a focus on practical, real-world applications.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ABOUT;
