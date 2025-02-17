'use client'
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const AnyQuestion = () => {
  const t = useTranslations();
  return (
    <section className="AnyQuestion bg-[#0076B1] py-8 sm:py-[52px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="container"
      >
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px] font-extrabold uppercase text-white lg:mb-8 mb-3">
          {t("have_questions")}
        </h2>
        <Link
          href={"/contact-us"}
          className="bg-[#F7941D] rounded-[84px] pt-3 sm:pt-4 pb-2 sm:pb-3 px-10 sm:px-24 text-white font-light text-lg sm:text-2xl text-center w-fit block m-auto"
        >
          {t("contact_us")}
        </Link>
      </motion.div>
    </section>
  );
};

export default AnyQuestion;
