import React from "react";
import Image from "next/image";
import Link from "next/link";
import catalogueImg from "@/assets/images/catalogue.png";
import "./Catalogue.css";

const Catalogue = () => {
  return (
    <div className="Catalogue py-[100px] sm:py-[200px] bg-white w-full relative">
      <div className="container">
        {/* العنوان والوصف */}
        <div className="mainHeading flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[51px] py-3 font-extrabold uppercase text-center">
            catalogue
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xltext-center text-[#656565] font-light">
            Download and explore our catalogue
          </p>
        </div>

        {/* صورة الكتالوج */}
        <div className="catalogueImg flex justify-center items-center py-[50px] sm:py-[100px]">
          <Image
            src={catalogueImg}
            alt="catalogue"
            className="max-w-full sm:max-w-[800px]"
          />
        </div>

        {/* زر التصفح */}
        <Link
          href="/catalogue"
          className="py-2 px-[40px] sm:py-6 sm:px-[80px] bg-[#FFB548] rounded-lg text-lg sm:text-xl md:text-2xl font-light text-white text-center m-auto w-fit block hover:bg-[#FFA726] transition"
        >
          BROWSE
        </Link>
      </div>
    </div>
  );
};

export default Catalogue;
