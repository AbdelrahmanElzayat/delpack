import Link from "next/link";
import React from "react";

const AnyQuestion = () => {
  return (
    <section className="AnyQuestion bg-[#0076B1] py-8 sm:py-[52px]">
      <div className="container">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px] font-extrabold uppercase text-white mb-5">
          Have any questions?
        </h2>
        <Link
          href={"/"}
          className="bg-[#F7941D] rounded-[84px] pt-3 sm:pt-4 pb-2 sm:pb-3 px-10 sm:px-24 text-white font-light text-lg sm:text-2xl text-center w-fit block m-auto"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default AnyQuestion;
