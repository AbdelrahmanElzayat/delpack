import React from "react";
import style from './about.module.css'
const AboutUs = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="relative w-full text-center">
          <span className="text-[150px] opacity-35 text-[#E2E2E2] font-extrabold uppercase lg:leading-[150px]">
            ABOUT US
          </span>
          <h2
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-full ${style.heading}`}
          >
            Delta Misr For Plastic
          </h2>
        </div>
        <div className="description">
          <p className="text-center text-xl font-light text-[#656565]">
            The main center, administration and factories are located in Gharbia
            Governorate. The company's area is about twenty-five thousand square
            meters equipped with the best production lines and the best
            capabilities consisting of injection and blowing machines to produce
            plastic containers and container covers from PP, PE, PET materials.
            The company does not accept the application of the recycling system
            in its products and maintains the production of a pure and healthy
            product with high-purity raw materials and the highest international
            quality specifications. The company also holds the ISO 9001 - 2015
            and ISO 22000 - 2018 certificates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
