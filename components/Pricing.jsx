"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  

  // price information array
  const pricingInfo = [
    {
      title: "Unlimited Events",
      svg: "/svg/grow.svg",
    },
    {
      title: "AI Content Creation",
      svg: "/svg/ai.svg",
    },
    {
      title: "World-Class Support",
      svg: "/svg/support.svg",
    },
    {
      title: "Plus so much more!",
      svg: "/svg/more.svg",
    },
  ];
  return (
    <div
      ref={ref}
      className="md:flex items-center md:text-left text-center mt-10 lg:mt-28"
    >
      <div className="md:w-1/2">
        <motion.p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.7 }}
          className="md:text-4xl text-3xl font-bold"
        >
          Pricing that meets your needs
        </motion.p>
        <motion.p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="mt-4 md:text-base text-sm"
        >
          Created with our customers in mind, we offer flexible pricing options
          to meet your specific requirements. Contact us today to discuss your
          goals and find the perfect pricing solution.
        </motion.p>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-8 flex justify-center">
        <div className="bg-[#8087bd] text-white text-center py-16 w-[460px] flex justify-center items-center rounded-t-full">
          <div>
            <p className="text-xl tracking-[2px]">STARTING AT</p>
            <p className="font-bold pt-10 pb-3 text-3xl">$500</p>
            <p>a month, billed at $6000 a year</p>
            <div className="mt-10">
              {pricingInfo.map((data, index) => (
                <div key={index} className="flex mt-2 items-center justify-between">
                  <img src={data.svg} alt='pricing' />
                  <p className="text-left">{data.title}</p>
                </div>
              ))}
            </div>
            <button className="text-white font-bold rounded-3xl py-2 mt-10 w-full bg-black">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
