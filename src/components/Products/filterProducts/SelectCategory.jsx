"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./filter.css";
import left from "@/assets/icons/leftpagination.svg";
import right from "@/assets/icons/rightpagination.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const SelectCategory = ({ values, handleChange, categories }) => {
  const swiperRef = useRef(null);
  const t = useTranslations();
  const lang = Cookies.get("lang");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className="SelectCategory border-b border-[#A4A4A4] pb-4 flex items-center gap-6 lg:gap-20 w-full flex-col lg:flex-row"
    >
      <h3
        className={`text-[#F7941D] text-xl sm:text-2xl font-bold xl:${
          lang === "en" ? "border-r" : "border-l"
        } xl:border-[#F7941D] ${
          lang === "en" ? "pr-4" : "pl-4"
        } w-full lg:w-[15%]`}
      >
        {t("category")}
      </h3>

      <div className="relative w-[75%]">
        {/* زر السهم الأيسر */}
        <button className="prev-button absolute -left-10 top-1/2 -translate-y-1/2 z-10">
          <Image src={left} alt="left" />
        </button>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            250: { slidesPerView: 2 },
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation]}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }} // ✅ تفعيل أزرار التنقل
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ تحديث `swiperRef`
        >
          <SwiperSlide className="w-fit">
            <div className="flex items-center gap-2 text-white px-4 py-2">
              <input
                type="checkbox"
                name="category"
                value={0}
                checked={values.category.includes("0")}
                onChange={handleChange}
                className="w-4 h-4 mb-2 accent-[#F7941D] shrink-0"
              />
              <label className="text-xs md:text-sm lg:text-base xl:text-lg font-light whitespace-nowrap uppercase">
                {t("all")}
              </label>
            </div>
          </SwiperSlide>
          {categories?.map((category) => (
            <SwiperSlide key={category.id} className="w-fit">
              <div className="flex items-center gap-2 text-white px-4 py-2">
                <input
                  type="checkbox"
                  name="category"
                  value={category?.id}
                  checked={
                    values.category.includes(category?.id.toString()) &&
                    !values.category.includes("0")
                  }
                  onChange={handleChange}
                  className="w-4 h-4 mb-2 accent-[#F7941D] shrink-0"
                  disabled={values.category.includes("0")}
                />
                <label className="text-xs md:text-sm lg:text-base xl:text-lg font-light whitespace-nowrap uppercase">
                  {category?.name}
                </label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* زر السهم الأيمن */}
        <button className="next-button absolute -right-10 top-1/2 -translate-y-1/2 z-10">
          <Image src={right} alt="right" />
        </button>
      </div>
    </motion.div>
  );
};

export default SelectCategory;
