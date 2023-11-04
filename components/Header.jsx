//package import
import React, { useState } from "react";
import Link from "next/link";
import Drawer from "./Drawer";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex lg:mx-14 mx-4  items-center h-[60px] justify-between">
      <img src="/svg/logo.svg" />
      <div className="w-8">
        <AiOutlineMenu
          onClick={() => setIsOpen(true)}
          className={`flex text-black md:hidden mr-5  h-8 w-6`}
        />
      </div>
      <div className="md:flex hidden font-bold">
        <div className="mr-6">
          <Link href="/">Features</Link>
        </div>
        <div className="mr-6">
          <Link href="/">Pricing</Link>
        </div>
        <div className="mr-6">
          <Link href="/">Resources</Link>
        </div>
        <div>
          <Link href="/">Events</Link>
        </div>
      </div>
      <div className="font-bold md:block hidden">
        <button className="mr-4">Login</button>
        <button className="rounded-3xl px-6 py-2 bg-black text-white">
          Book a Demo
        </button>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="ml-5">
          <Link
            href="/"
            className={"border-b-2 border-black w-fit ml-5 h-10  link"}
          >
            <p className="text-black text-lg font-semibold">Home</p>
          </Link>
          <Link
            href="/"
            className={"border-b-2 border-black w-fit ml-5 h-10  link"}
          >
            {" "}
            <p className="text-black text-lg font-semibold">Features</p>
          </Link>
          <Link
            href="/"
            className={"border-b-2 border-black w-fit ml-5 h-10  link"}
          >
            {" "}
            <p className="text-black text-lg font-semibold">Pricing</p>
          </Link>
          <Link
            href="/"
            className={"border-b-2 border-black w-fit ml-5 h-10  link"}
          >
            {" "}
            <p className="text-black text-lg font-semibold">Resources</p>
          </Link>
          <Link
            href="/"
            className={"border-b-2 border-black w-fit ml-5 h-10  link"}
          >
            {" "}
            <p className="text-black text-lg font-semibold">Events</p>
          </Link>

          <div className="mt-5">
            <button className={"border-b-2 border-black w-fit  h-10  link"}>
              {" "}
              <p className="text-black text-lg font-semibold">Login</p>
            </button>
          </div>
          <button className={"border-b-2 border-black w-fit mt-5 h-10  link"}>
            {" "}
            <p className="text-black text-lg font-semibold">Book a Demo</p>
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
