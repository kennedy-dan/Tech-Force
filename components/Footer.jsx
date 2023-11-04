import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black py-10  mt-[700px] lg:mt-[100px] lg:px-14 px-4 md:mt-[30px]">
      <div className="md:flex justify-between text-white">
        <div>
          <p>PRODUCT</p>
          <div className="text-sm">
            <p className="text-slate-500 pt-3">Create & Integrate</p>
            <p className="text-slate-500 pt-3">Welcome Studio</p>
            <p className="text-slate-500 pt-3">Content Creator</p>
            <p className="text-slate-500 pt-3">Explore All Features</p>
            <p className="text-slate-500 pt-3">Try the Interactive Demo</p>
          </div>
        </div>
        <div className="md:mt-0 mt-6">
          <p>RESOURCES</p>
          <div className="text-sm">
            <p className="text-slate-500 pt-3">Open Doors Community</p>
            <p className="text-slate-500 pt-3">Customer Stories</p>
            <p className="text-slate-500 pt-3">Customer Support</p>
          </div>
        </div>{" "}
        <div className="md:mt-0 mt-6">
          <p>COMPANY</p>
          <div className="text-sm">
            <p className="text-slate-500 pt-3">About Us</p>
            <p className="text-slate-500 pt-3">Company Blog</p>
          </div>
        </div>
        <div className="md:mt-0 mt-6">
          <p>TRENDING POSTS</p>
          <div className="text-sm">
            <p className="text-slate-500 pt-3">Welcome Next Evolution</p>
            <p className="text-slate-500 pt-3">Webinars and Content at Scale</p>
            <p className="text-slate-500 pt-3">Growth Marketing</p>
            <p className="text-slate-500 pt-3">Demand Generation</p>
          </div>
        </div>
      </div>
      <hr className="my-7 text-slate-600" />
      <div className="sm:flex justify-between items-center">
     
        <div className="flex sm:mt-0 mt-6">
          <p className="text-white ">Terms</p>
          <p className="px-3 text-white ">Privacy</p>
          <p className="text-white">Cookies</p>
        </div>
        <div className="flex sm:mt-0 mt-10">
          <div className="rounded-full border-white border-2 h-fit p-3">
            <FaLinkedinIn className="text-white" />
          </div>
          <div className="rounded-full border-white mx-3 border-2 h-fit p-3">
            <FaFacebookF className="text-white" />
          </div>
          <div className="rounded-full border-white border-2 h-fit p-3">
            <FaTwitter className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
