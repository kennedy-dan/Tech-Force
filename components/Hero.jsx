"use client";
// import { motion } from "framer-motion";
import {motion, useInView} from "framer-motion"
import React, { useState, useEffect, useRef } from "react";


const Hero = () => {
  const initialText = "Seamlessly Design, Host, and Repurpose";
  const [text, setText] = useState(initialText);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const wordsToReplace = ["Enhance", "Deploy", "Optimize"]; // Replace these with your desired words.

    let currentIndex = 0;

    const replaceWords = () => {
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % wordsToReplace.length;
        setText(
          `Seamlessly Design, Host, and <span class="font-bold">${wordsToReplace[currentIndex]}</span>`
        );
        replaceWords();
      }, 2000); // Change the interval (in milliseconds) for word replacement as needed.
    };

    replaceWords();
  }, []);
  return (
    <div ref={ref} className="md:flex lg:mt-40 md:text-left text-center mt-20  items-center">
      <motion.div
        animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
        initial={{ y: -80, display: "none" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="md:w-1/2"
      >
        <p className="font-bold lg:text-7xl md:text-3xl text-4xl my-8">
          Webinar software for the modern marketer
        </p>
        <div className="lg:text-xl md:text-base text-sm">
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="flex md:justify-start justify-center mt-5">
          <button className="md:py-4 py-2 bg-[#8087bd] md:text-sm text-[11px] rounded-3xl px-4 font-bold text-white">
            Try the interactive demo
          </button>
          <button className="ml-2 border border-[#8087bd] md:text-sm text-[11px] px-4 rounded-3xl">
            How it works
          </button>
        </div>
      </motion.div>
      <div
        className="md:w-1/2 md:mt-0 mt-14"
        style={{ backgroundImage: `url('/svg/new.svg')` }}
      >
        <img src="/svg/herosvg.svg" />
      </div>
    </div>
  );
};

export default Hero;
