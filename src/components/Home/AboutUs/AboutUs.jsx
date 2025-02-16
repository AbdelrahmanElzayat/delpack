"use client";
import React from "react";
import style from "./about.module.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutUs = ({ description }) => {
  const t = useTranslations();
  return (
    <div className="py-10 md:py-16 md:px-0" id="about-us">
      <div className="container">
        <div className="relative w-full text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="hidden xl:block text-[24px] sm:text-[32px] md:text-[42px] lg:text-[150px] opacity-35 text-[#E2E2E2] font-extrabold uppercase leading-[60px] sm:leading-[80px] md:leading-[150px]"
          >
            {t("about_us")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`relative xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-[80%] w-full text-xl ms::text-2xl lg:text-4xl ${style.heading}`}
          >
            {t("company_name")}
          </motion.h2>
        </div>
        <div className="description mt-4">
          <motion.p
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, lineHeight: "60px" }}
            whileInView={{
              opacity: 1,
              lineHeight: "37px",
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center text-sm sm:text-base md:text-xl font-light text-[#656565] leading-6 sm:leading-7 md:leading-8"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
