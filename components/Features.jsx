"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WebinarFeatures = ({
  infotext,
  icon1,
  icon2,
  icon3,
  text1,
  text2,
  text3,
  img,
  bg,
}) => {
  const featureContent = [
    {
      featuretext: text1,
      svg: icon1,
    },
    {
      featuretext: text2,
      svg: icon2,
    },
    {
      featuretext: text3,
      svg: icon3,
    },
  ];
  return (
    <div
      className={`md:flex items-center px-8 py-20 rounded-3xl text-white`}
      style={{ backgroundColor: bg }}
    >
      <div>
        <p className="font-bold text-2xl">{infotext}</p>
        <div className="pt-10">
          {featureContent.map((feature) => (
            <div className="flex items-center mb-4">
              <img src={feature.svg} />
              <p className="ml-6">{feature.featuretext}</p>
            </div>
          ))}
          <di></di>
        </div>
      </div>
      <div>
        <img src={img} className="h-96" />
      </div>
    </div>
  );
};

const Features = () => {
  const [text, setText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const features = [
    {
      img: "/svg/createFeature.svg",
      name: "Create",
      description:
        "Streamline the webinar registration process and maximize attendance rates with seamless integrations.",
    },
    {
      img: "/svg/engageFeature.svg",
      name: "Engage",
      description:
        "Deliver an unforgettable attendee experience with Welcome Studio and our intuitive webinar software features.",
    },
    {
      img: "/svg/repurposeFeature.svg",
      name: "Repurpose",
      description:
        "Powered by AI, Content Creator scans your webinars and transforms them into shareable video content, instantly.",
    },
  ];

  const openFeatures = (name) => {
    setText(name);
  };
  return (
    <div ref={ref}>
      <div className="md:w-1/2 lg:mt-40 mt-8 md:text-left text-center">
        <motion.p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.7 }}
          className="font-bold md:text-4xl text-3xl"
        >
          Explore Our Features
        </motion.p>
        <motion.p
          animate={isInView ? { y: -10, scale: 1, display: "block" } : ""}
          initial={{ y: -100, display: "none" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="mt-6 md:text-base text-sm"
        >
          Manage your webinar experience from start to finish with Welcome's
          webinar software.
        </motion.p>
      </div>

      <div className="md:flex justify-center font-bold items-center text-white text-center w-full py-6 mt-9 bg-black rounded-3xl">
        {features.map((data) => (
          <div className="flex w-full md:mt-0 mt-9 mx-auto justify-end ">
            <div>
              <div className="flex w-full justify-center">
                <img src={data.img} className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold lg:text-3xl md:text:2xl text-xl py-6">
                {data.name}
              </p>

              <div className="flex w-full justify-center">
                <p className="w-3/4 md:text-sm">{data.description}</p>
              </div>
              <button
                className="mt-6 underline-offset-8 md:text-sm underline"
                onClick={() => openFeatures(data.name)}
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {text === "Create" ? (
          <WebinarFeatures
            infotext="Streamline Registration, Maximize Attendance"
            icon1="/svg/triangle.svg"
            icon2="/svg/registration.svg"
            icon3="/svg/msg.svg"
            text1="Streamline the webinar registration process and maximize attendance rates with seamless integrations."
            text2="Deliver an unforgettable attendee experience with Welcome Studio and our intuitive webinar software features."
            text3="Powered by AI, Content Creator scans your webinars and transforms them into shareable video content, instantly."
            img="/svg/create.svg"
            bg="#8087bd"
          />
        ) : (
          ""
        )}
        {text === "Engage" ? (
          <WebinarFeatures
            infotext="Webinar software that's easy to use"
            icon1="/svg/triangle.svg"
            icon2="/svg/registration.svg"
            icon3="/svg/msg.svg"
            text1="Prep your speakers for the spotlight with confidence in the Green Room."
            text2="Engage your audience with stunning visual overlays and dynamic screen-share layouts."
            text3="Intermix HD videos  and seamlessly transition between pre-recorded sessions."
            img="/svg/engage.svg"
            bg="#2596be"
          />
        ) : (
          ""
        )}
        {text === "Repurpose" ? (
          <WebinarFeatures
            infotext="Instant Clips of the Best Moments"
            icon1="/svg/triangle.svg"
            icon2="/svg/registration.svg"
            icon3="/svg/msg.svg"
            text1="Content creator’s AI finds the most insightful moments and auto-generates clip suggestions."
            text2="Get suggested titles and clip descriptions you can immediately use to post and share."
            text3="Save time and resources. What usually takes a week or more, now takes seconds."
            img="/svg/repurpose.svg"
            bg="#44E0CD"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Features;
