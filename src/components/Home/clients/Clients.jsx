"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules"; // استيراد الـ Autoplay
import Image from "next/image";
import { useFetchClientsQuery } from "@/rtk/slices/clients";
import { useTranslations } from "next-intl";
const Clients = () => {
  const { data: clients } = useFetchClientsQuery("en");
  const t = useTranslations();
  return (
    <section className="py-6 lg:mt-31 xl:mt-40 lg:py-20">
      <div className="container ">
        <div className="mainHeading flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[51px] py-3 font-extrabold uppercase text-center">
            {t("our_clients")}
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xltext-center text-[#656565] font-light text-center">
            {t("trusted_clients")}
          </p>
        </div>
        <Swiper
          draggable={true}
          spaceBetween={10}
          autoplay={{
            delay: 0, // عشان يتحرك من غير توقف
            disableOnInteraction: false, // يكمل الحركة حتى لو حصل تفاعل
            pauseOnMouseEnter: false, // يستمر في الحركة حتى لو الماوس دخل على اللوجوهات
          }}
          speed={2000} // سرعة الحركة - أسرع يعني يتحرك بسرعة أكبر
          loop={true} // يعيد اللوجوهات من الأول بعد ما يخلص
          freeMode={true} // يخلي الحركة حرة ومستمرة
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            300: {
              slidesPerView: 3, // عدد اللوجوهات للشاشات الصغيرة جداً (موبايل)
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3, // للشاشات الموبايل المتوسطة
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4, // للشاشات التابلت
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5, // للشاشات الكبيرة مثل اللابتوب والديسكتوب
              spaceBetween: 20,
            },
          }}
          className="mt-8 lg:mt-20"
          dir="ltr"
        >
          {clients?.data?.map((logo) =>
            logo ? (
              <SwiperSlide key={logo?.id}>
                <div
                  className="border border-[#CFCFCF] md:w-full h-[100px] sm:h-[135px] px-7 py-4 rounded-2xl flex justify-center"
                  style={{
                    boxShadow:
                      "0px 3.458px 11.151px -0.864px rgba(0, 0, 0, 0.13)",
                  }}
                >
                  <Image
                    src={logo?.image_path}
                    width={100}
                    height={100}
                    alt={`brand-logo-${logo?.id}`}
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
