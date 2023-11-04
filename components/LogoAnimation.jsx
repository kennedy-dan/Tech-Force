import React, { useEffect, useState } from "react";
import styles from "styles/LogoAnimation.module.css";

const logos = [
  "/svg/brex.png",
  "/svg/dribble.svg",
  "/svg/flex.png",
  "/svg/data.png",
  "/svg/stackO.svg",
  "/svg/password.png",
  "/svg/poly.png",

  // Add paths to your 13 logos here
];

const LogoAnimation = () => {
  return (
    <div className="lg:mt-40 mt-8  left-0 top-0 h-full overflow-hidden  flex items-center">
      {logos.map((logo, index) => (
        <div ey={index} className="flex space-x-4 md:mx-4 mx-1">
          <img
            src={logo}
            alt="Sponsor 1"
            className={`${styles.sponsor_logo} md:w-40 md:h-40 w-20 h-20 object-contain`}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoAnimation;
