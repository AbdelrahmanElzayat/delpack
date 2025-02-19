"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import arrowright from "@/assets/icons/arrowright.svg";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Hero = ({ banners }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = ".swiper-button-prev-custom";
      swiperInstance.params.navigation.nextEl = ".swiper-button-next-custom";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="h-[calc(50vh+150px)] md:h-[calc(100vh+150px)] relative"
    >
      <Swiper
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="h-full"
        modules={[Autoplay, Navigation, Scrollbar, A11y]}
        navigation={true}
        dir="ltr"
      >
        {banners?.map((slide) => (
          <SwiperSlide key={slide?.id} className="h-full w-full relative">
            {slide.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={slide?.image_path}
                  alt={`Slide ${slide.id}`}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              </div>
            ) : (
              <video
                src={slide.image_path}
                autoPlay
                loop
                muted
                playsInline
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
    </motion.div>
  );
};

export default Hero;
