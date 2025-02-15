import React from "react";

const FormDescription = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 mdgap-5 basis-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[63px] text-[#F7941D] font-extrabold uppercase">
        get in touch
      </h2>
      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
        Delta Misr For Plastic, Trade & Distribution 
      </h3>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-light w-[90%]">
        Whether you’re placing an order, seeking support, or simply have a
        question, we’re here to help. Reach out to us anytime, and our team will
        assist you promptly.
      </p>
    </div>
  );
};

export default FormDescription;
