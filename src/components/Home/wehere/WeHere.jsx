import React from "react";

const WeHere = () => {
  return (
    <section className="WeHere bg-[#2E2E2E] py-20 sm:py-40">
      <div className="container px-4">
        <div className="flex justify-center items-center flex-col text-center max-w-3xl mx-auto">
          <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[55px] text-[#FCFCFC] leading-tight animate-fadeIn">
            We’re here to help
          </h3>
          <p className="font-light text-sm sm:text-lg md:text-[25px] text-[#FCFCFC] mt-4">
            Get in touch for inquiries, collaborations, or support
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeHere;
