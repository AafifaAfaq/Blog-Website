import React from "react";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
export default function StatsSection() {
    return (
        <section className="text-gray-600 body-font bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              {/* Subscriber Block */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-rose-400 px-4 py-6 rounded-lg">
                  <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                  <p className="leading-relaxed">Subscribers</p>
                  <FaYoutube className="text-rose-400 text-4xl mt-2 mx-auto" />
                </div>
              </div>
              
              {/* Readers Block */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-rose-400 px-4 py-6 rounded-lg">
                  <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                  <p className="leading-relaxed">Readers</p>
                  <MdOutlineChromeReaderMode className="text-rose-400 text-4xl mt-2 mx-auto" />
                </div>
              </div>
              
              {/* Followers Block */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-rose-400 px-4 py-6 rounded-lg">
                  <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                  <p className="leading-relaxed">Followers</p>
                  <FaInstagram className="text-rose-400 text-4xl mt-2 mx-auto" />
                </div>
              </div>
              
              {/* Likes Block */}
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-rose-400 px-4 py-6 rounded-lg">
                  <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p className="leading-relaxed">Likes</p>
                  <BiSolidLike className="text-rose-400 text-4xl mt-2 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
    );
  }
  