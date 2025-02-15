import React from "react";
import style from "./about.module.css";

const AboutUs = ({ description }) => {
  return (
    <div className="py-10 md:px-0" id="about-us">
      <div className="container">
        <div className="relative w-full text-center">
          <span className="hidden xl:block text-[24px] sm:text-[32px] md:text-[42px] lg:text-[150px] opacity-35 text-[#E2E2E2] font-extrabold uppercase leading-[60px] sm:leading-[80px] md:leading-[150px]">
            ABOUT US
          </span>
          <h2
            className={`relative xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-[80%] w-full text-xl ms::text-2xl lg:text-4xl ${style.heading}`}
          >
            Delta Misr For Plastic
          </h2>
        </div>
        <div className="description mt-4">
          <p className="text-center text-sm sm:text-base md:text-xl font-light text-[#656565] leading-6 sm:leading-7 md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
