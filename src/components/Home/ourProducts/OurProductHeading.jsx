import React from "react";
import style from "./ourProducts.module.css";
import Image from "next/image";
import arrowdown from "@/assets/icons/arrowdown.svg";
const OurProductHeading = () => {
  return (
    <div
      className={`${style.OurProductHeading} min-h-[400px] pt-5 flex justify-center items-center w-full`}
    >
      <div className="container">
        <div className="content flex flex-col items-center justify-center gap-5 relative z-50">
          <h2>OUR PRODUCTs</h2>
          <p>Innovative. Reliable. Designed to meet your every need.</p>
          <Image src={arrowdown} alt="explore products" className="animate-bounce mt-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OurProductHeading;
