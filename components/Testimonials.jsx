"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
const testimonies = [
  {
    img: "/images/testimonial1.png",
    text: "It's truly the vibe that people want when attending a webinar or online event",
    name: "Brendan H., Founder & Advisor",
  },
  {
    img: "/images/testimonial2.png",
    text: "The most impressive video software I've ever seen",
    name: "Hunter A., Head of Growth",
  },
  {
    img: "/images/testimonial3.png",
    text: "The platform has been able to accommodate our growth and a variety of event types throughout the year.",
    name: "Tami M., Vice President Marketing",
  },
  // Add more testimonies as needed
];

const Testimonials = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony(
        (prevTestimony) => (prevTestimony + 1) % testimonies.length
      );
    }, 5000); // Change testimonies every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="md:flex md:text-left text-center justify-between md:mt-40 mt-20"
    >
      <div className="md:w-1/2">
        <motion.p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.7 }}
          className="font-bold md:text-4xl text-3xl"
        >
          Customer Testimonials{" "}
        </motion.p>
        <p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="mt-6 md:text-base text-sm"
        >
          Discover what our clients have to say about their experiences with our
          products and services. These testimonials are a testament to our
          commitment to excellence and customer satisfaction.
        </p>
      </div>
      <div className="relative md:w-1/2 overflow-hidden  h-60">
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className={`absolute inset-y-0  h-full  p-6 transform transition-transform duration-500 ease-in-out ${
              index === currentTestimony ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex">
              <img
                src={testimony.img}
                alt="testimonial"
                className="w-20 h-10 object-contain"
              />
              <div className="ml-6">
                <div className="flex">
                  <img src="/svg/star.svg" alt="testimonial" />
                  <img src="/svg/star.svg" alt="testimonial" />{" "}
                  <img src="/svg/star.svg" alt="testimonial" />
                  <img src="/svg/star.svg" alt="testimonial" />{" "}
                  <img src="/svg/star.svg" alt="testimonial" />
                </div>
                <div className="py-4">
                  <em className="font-semibold text-sm">{testimony.text}</em>
                </div>
                <p className="md:text-base text-sm">{testimony.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
