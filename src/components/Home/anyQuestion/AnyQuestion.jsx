import Link from "next/link";
import React from "react";

const AnyQuestion = () => {
  return (
    <section className="AnyQuestion bg-[#0076B1] py-[52px]">
      <div className="container">
        <h2 className="text-center text-[55px] font-extrabold uppercase text-white mb-5">
          Have any quistions ?
        </h2>
        <Link
          href={"/"}
          className="bg-[#F7941D] rounded-[84px] pt-4 pb-3 px-24 text-white font-light text-2xl text-center w-fit block m-auto"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default AnyQuestion;
