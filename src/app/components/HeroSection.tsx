import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6">
        {/* Text Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 py-5">
          <p className="text-rose-500 uppercase text-xl tracking-widest mb-4">
            Welcome
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-wide">
            Exploring the World of <br /> Artificial Intelligence
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            AI Enthusiast / Developer / Blogger
          </p>
          <p className="text-gray-600 mb-6">
            Dive into the latest advancements in Artificial Intelligence, <br />
            machine learning,and how they are transforming industries and daily
            life. <br />
            Stay updated with expert insights, tutorials, and cutting-edge
            research.
          </p>
          <button className="border-2  border-rose-400 text-rose-400 px-6 py-3 rounded-lg hover:bg-rose-400 hover:text-white transition duration-300">
            <Link href="/blog">Learn More &rarr; </Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/hero1.jpg"
            alt="Artificial Intelligence"
            width={500}
            height={500}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
