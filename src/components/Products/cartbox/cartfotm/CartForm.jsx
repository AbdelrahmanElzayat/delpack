"use client";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import nameIcon from "@/assets/icons/name.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import emailIcon from "@/assets/icons/email.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/rtk/store";
import { cartActions } from "@/rtk/slices/cartslice";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const CartForm = ({ productsIncart }) => {
  const lang = Cookies.get("lang");
  const t = useTranslations();
  const validationSchema = Yup.object({
    name: Yup.string().required(t("name_required")),
    email: Yup.string().email(t("invalid_email")).required(t("email_required")),
    phone: Yup.string()
      .matches(/^\d+$/, t("invalid_phone"))
      .required(t("phone_required")),
    whatsapp: Yup.string()
      .matches(/^\d+$/, t("invalid_whatsapp"))
      .required(t("whatsapp_required")),
  });
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(1);
    
    setStatus(null);
    const payload = {
      customer_name: values.name,
      customer_phone: values.phone,
      customer_email: values.email,
      customer_whatsapp: values.whatsapp,
      products: productsIncart.map(({ id, quantity, color }) => ({
        id,
        quantity,
        color,
      })),
    };

    try {
      await axios.post("https://delpack.poultrystore.net/api/order", payload);
      toast.success(t("order_success"));
      setStatus({ type: "success", message: t("order_success") });
      dispatch(cartActions.clearCart());
      resetForm();
    } catch (error) {
      toast.error(t("failed_order"));
      setStatus({
        type: "error",
        message: t("failed_order"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: lang === "en" ? 100 : -100 }}
      exit={{ opacity: 0, x: lang === "en" ? 100 : -100 }}
      style={{ overflow: "hidden" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="CartForm md:px-12 lg:px-16 w-full"
    >
      <h5 className="text-[#F7941D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-tight">
        {t("continue_purchasing")}
      </h5>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-[#606060] uppercase mt-2">
        {t("contact_info")}
      </p>

      <Formik
        initialValues={{ name: "", email: "", phone: "", whatsapp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col items-start gap-10 mt-8">
            {[
              { name: "name", placeholder: t("name"), icon: nameIcon },
              { name: "email", placeholder: t("email"), icon: emailIcon },
              { name: "phone", placeholder: t("phone"), icon: phoneIcon },
              {
                name: "whatsapp",
                placeholder: t("whatsapp"),
                icon: whatsappIcon,
              },
            ].map(({ name, placeholder, icon }) => (
              <div key={name} className="w-full max-w-full">
                <div className="flex justify-between items-center border-b border-gray-400 w-full pb-3">
                  <Field
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-lg placeholder:font-light"
                  />
                  <Image src={icon} alt={name} width={24} height={24} />
                </div>
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-[#0076B1] px-6 md:px-8 lg:px-10 py-2 lg:py-3 pt-3 rounded-md text-lg sm:text-xl font-semibold text-white uppercase mt-4 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("send")}
            </button>

            {status && (
              <p
                className={`mt-2 text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default CartForm;
