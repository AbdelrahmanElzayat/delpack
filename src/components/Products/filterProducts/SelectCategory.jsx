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
const categories = [
  "All",
  "Edible oils",
  "Soft drink bottles",
  "Honey packages",
  "Molasses packages",
  "Juices",
  "Water bottles",
  "Dairy products",
  "Household cleaners",
];

const SelectCategory = ({ values, handleChange }) => {
  const swiperRef = useRef(null);

  return (
    <div className="SelectCategory border-b border-[#A4A4A4] pb-4 flex items-center gap-6 lg:gap-20 w-full flex-col lg:flex-row">
      <h3 className="text-[#F7941D] text-xl sm:text-2xl font-bold xl:border-r xl:border-[#F7941D] pr-4 w-full lg:w-[15%]">
        CATEGORY
      </h3>

      <div className="relative w-[75%]">
        {/* زر السهم الأيسر */}
        <button
          className="absolute -left-10 top-1/2 -translate-y-1/2  z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={left} alt="left" />
        </button>

        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation]}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map((category) => (
            <SwiperSlide key={category} className="w-fit">
              <div className="flex items-center gap-2 text-white px-4 py-2">
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={values.category.includes(category)}
                  onChange={handleChange}
                  className="w-4 h-4 mb-2 accent-[#F7941D] shrink-0"
                />
                <label className="text-lg font-light whitespace-nowrap">
                  {category}
                </label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* زر السهم الأيمن */}
        <button
          className="absolute -right-10 top-1/2 -translate-y-1/2  z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={right} alt="left" />
        </button>
      </div>
    </div>
  );
};

export default SelectCategory;
