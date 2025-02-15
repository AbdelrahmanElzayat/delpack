"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwipeFields = ({ slides }) => {
  return (
    <div className="w-[calc(100%-80px)] max-h-[400px] flex justify-center items-center gap-4">
      <div className="relative w-full max-w-[500px]">
        {/* Custom Navigation Buttons */}
        <button
          className="hidden md:block swiper-button-custom-prev absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-10"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="28"
            viewBox="0 0 12 28"
            fill="none"
          >
            <path
              d="M11 27L11 1L1 13.8544L11 27Z"
              stroke="#0A6BAB"
              strokeWidth="1.36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="hidden md:block swiper-button-custom-next absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-10"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="28"
            viewBox="0 0 12 28"
            fill="none"
          >
            <path
              d="M1 1L1 27L11 14.1456L1 1Z"
              stroke="#0A6BAB"
              strokeWidth="1.36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-custom-next",
            prevEl: ".swiper-button-custom-prev",
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-[500px] h-full max-h-[350px]"
        >
          {slides?.map((item) => (
            <SwiperSlide
              key={item?.id}
              className="flex items-center justify-center text-white text-2xl font-bold rounded-3xl overflow-hidden"
            >
              <Image
                src={item?.image_path}
                width={500}
                height={500}
                objectFit="cover"
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipeFields;
