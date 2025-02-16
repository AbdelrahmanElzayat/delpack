"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const WeHere = () => {
  const t = useTranslations();
  return (
    <section className="WeHere bg-[#2E2E2E] py-20 sm:py-40">
      <div className="container px-4">
        <div className="flex justify-center items-center flex-col text-center max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[55px] text-[#FCFCFC] leading-tight animate-fadeIn"
          >
            {t("help_section")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="font-light text-sm sm:text-lg md:text-[25px] text-[#FCFCFC] mt-4"
          >
            {t("get_in_touch")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WeHere;
