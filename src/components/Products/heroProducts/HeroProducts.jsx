import React from "react";
import bg from "@/assets/images/bgProducts.png";
import "./HeroProducts.css";
const HeroProducts = () => {
  return (
    <div className="heroProducts">
      <div className="container">
        <div className="flex justify-center items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-extrabold text-white text-[64px] uppercase">products</h1>
          <p className="text-white font-light text-2xl">Sustainable Packaging for a Better Tomorrow</p>
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
