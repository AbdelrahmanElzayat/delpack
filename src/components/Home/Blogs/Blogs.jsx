import React from "react";
import BlogSwiper from "./BlogSwiper";
import "./Blog.css";
import { useTranslations } from "next-intl";
const Blogs = ({ news }) => {
  const t = useTranslations();
  return (
    <section className="Blogs relative bg-white lg:h-[700px] py-6 md:py-8 lg:py-10" id="news">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D9D9D9] z-10"></div>
      <div className="relative z-20">
        <div className="mainHeading flex flex-col justify-center items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[51px] py-3 font-extrabold uppercase text-center">
            {t("news_updates")}
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#656565] font-light text-center">
            {t("knowledge_about_us")}
          </p>
        </div>
        <BlogSwiper news={news} />
      </div>
    </section>
  );
};

export default Blogs;
