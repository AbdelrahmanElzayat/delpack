import React from "react";
import "./HeroProducts.css";
const HeroProducts = () => {
  return (
    <div className="heroProducts">
      <div className="container">
        <div className="w-full flex justify-center items-center flex-col absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] uppercase">
            products
          </h1>
          <p className="text-white font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Sustainable Packaging for a Better Tomorrow
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
