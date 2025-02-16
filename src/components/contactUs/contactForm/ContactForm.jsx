"use client";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import nameIcon from "@/assets/icons/name.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import emailIcon from "@/assets/icons/email.svg";
import toast from "react-hot-toast";
import FormDescription from "./FormDescription";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const ContactForm = () => {
  const lang = Cookies.get("lang");
  const t = useTranslations();
  const validationSchema = Yup.object({
    name: Yup.string().required(t("name_required")),
    message: Yup.string().required(t("message_required")),
    email: Yup.string().email(t("invalid_email")).required(t("email_required")),
    phone: Yup.string()
      .matches(/^\d+$/, t("invalid_phone"))
      .required(t("phone_required")),
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setStatus(null);
    const payload = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
    };

    try {
      await axios.post(
        "https://delpack.poultrystore.net/api/contacts",
        payload
      );
      toast.success("message sent successfully!");
      setStatus({ type: "success", message: "message sent successfully!" });
      resetForm();
    } catch (error) {
      toast.error("Failed to sent message. Please try again.");
      setStatus({
        type: "error",
        message: "Failed to sent message. Please try again.",
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
      className="pt-6 sm:pt-10 md:pt-20"
    >
      <div className="container">
        <div className="flex items-start justify-between gap-20 flex-col md:flex-row">
          <FormDescription />
          <div className="basis-1/2">
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-full flex flex-col items-start gap-6 mt-8">
                  {[
                    { name: "name", placeholder: t("name"), icon: nameIcon },
                    { name: "email", placeholder: t("email"), icon: emailIcon },
                    { name: "phone", placeholder: t("phone"), icon: phoneIcon },
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
                  <div className="w-full max-w-full">
                    <div className="flex justify-between items-center border-b border-gray-400 w-full pb-3">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder={t("what_you_looking_for")}
                        className="w-full bg-transparent outline-none text-lg placeholder:font-light resize-none"
                      />
                    </div>
                    <ErrorMessage
                      name={"message"}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0076B1] px-6 md:px-8 lg:px-10 py-2 lg:py-3 pt-3 rounded-md text-lg sm:text-xl font-semibold text-white uppercase mt-4 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>

                  {status && (
                    <p
                      className={`mt-2 text-sm ${
                        status.type === "success"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <hr className="my-[70px]" />
      </div>
    </motion.div>
  );
};

export default ContactForm;
