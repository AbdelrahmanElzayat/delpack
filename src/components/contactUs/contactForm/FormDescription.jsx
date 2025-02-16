"use client";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import React from "react";

const FormDescription = () => {
  const t = useTranslations();
  const lang = Cookies.get("lang");
  return (
    <motion.div
      initial={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
      exit={{ opacity: 0, x: lang === "en" ? -100 : 100 }}
      style={{ overflow: "hidden" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-3 sm:gap-4 mdgap-5 basis-1/2"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[63px] text-[#F7941D] font-extrabold uppercase">
        {t("get_in_touch_contact")}
      </h2>
      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
        {t("company_name_contact")}
      </h3>
      <motion.p
        exit={{ opacity: 0 }}
        initial={{ opacity: 0, lineHeight: "60px" }}
        whileInView={{
          opacity: 1,
          lineHeight: "37px",
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-xs sm:text-sm md:text-lg lg:text-xl font-light w-[90%]"
      >
        {t("contact_us_message")}
      </motion.p>
    </motion.div>
  );
};

export default FormDescription;
