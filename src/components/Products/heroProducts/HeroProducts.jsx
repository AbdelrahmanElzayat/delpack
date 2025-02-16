"use client";
import React from "react";
import "./HeroProducts.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
const HeroProducts = () => {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="heroProducts"
    >
      <div className="container">
        <div className="w-full flex justify-center items-center flex-col ma:gap-3 absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-extrabold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] uppercase">
            {t("products")}
          </h1>
          <p className="text-white font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {t("sustainable_packaging")}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProducts;
