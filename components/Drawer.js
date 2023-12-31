import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full ")
      }
    >
      <div
        className={
          " w-screen max-w-lg right-0 absolute bg-[#fffbf5] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-32 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Nerrido</header>
          {children}
        </div>
      </div>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
