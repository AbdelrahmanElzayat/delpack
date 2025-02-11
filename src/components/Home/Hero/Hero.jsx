"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import s1 from "@/assets/images/s1.png";
import s2 from "@/assets/images/s2.png";
import arrowright from "@/assets/icons/arrowright.svg";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    { type: "image", src: s1 },
    { type: "image", src: s2 },
  ];

  return (
    <div className="h-[calc(50vh+150px)] md:h-[calc(100vh+150px)] relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-full"
        modules={[Navigation, Scrollbar, Autoplay, A11y]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full relative">
            {slide.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              </div>
            ) : (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-custom text-white py-6 px-2 md:py-10 md:px-3 border-r border-t border-b border-white rounded-[0_40px_40px_0] shadow-md">
        <Image
          src={arrowright}
          alt="prev"
          className="rotate-180 w-6 h-6 md:w-auto md:h-auto"
        />
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-custom text-white py-6 px-2 md:py-10 md:px-3 border-l border-t border-b border-white rounded-[40px_0_0_40px] shadow-md">
        <Image
          src={arrowright}
          alt="next"
          className="w-6 h-6 md:w-auto md:h-auto"
        />
      </button>
    </div>
  );
};

export default Hero;
