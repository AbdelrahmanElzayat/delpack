import React from "react";
import BlogSwiper from "./BlogSwiper";
import "./Blog.css";
const Blogs = () => {
  return (
    <section className="Blogs relative bg-white h-[700px] py-10">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D9D9D9] z-10"></div>
      <div className="relative z-20">
        <div className="mainHeading flex flex-col justify-center items-center">
          <h2 className="text-[51px] font-extrabold uppercase text-center">
            news & updates
          </h2>
          <p className="text-2xl text-center text-[#656565] font-light">
            Get more knowledge about us and our industry
          </p>
        </div>
        <BlogSwiper />
      </div>
    </section>
  );
};

export default Blogs;
