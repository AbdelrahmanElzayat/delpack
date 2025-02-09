import React from "react";
import "./Catalogue.css";
import catalogueImg from '@/assets/images/catalogue.png'
import Image from "next/image";
import Link from "next/link";
const Catalogue = () => {
  return (
    <div className="Catalogue py-[200px] bg-white w-full relative">
      <div className="container">
        <div className="mainHeading flex flex-col justify-center items-center">
          <h2 className="text-[51px] font-extrabold uppercase text-center">
            catalogue
          </h2>
          <p className="text-2xl text-center text-[#656565] font-light">
            Download and explore our catalogue
          </p>
        </div>
        <div className="ctaloguaImg flex justify-center items-center py-[100px]">
          <Image src={catalogueImg} alt="catalogue" />
        </div>
        <a href={"##"} className="py-6 px-[80px] bg-[#FFB548] rounded-lg text-2xl font-light text-textMain text-center m-auto w-fit block">
          BROWSE
        </a>
      </div>
    </div>
  );
};

export default Catalogue;
