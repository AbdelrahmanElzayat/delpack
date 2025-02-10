'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import nameIcon from "@/assets/icons/name.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import emailIcon from "@/assets/icons/email.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Phone is required"),
  whatsapp: Yup.string()
    .matches(/^\d+$/, "Invalid WhatsApp number")
    .required("WhatsApp is required"),
});

const CartForm = () => {
  return (
    <div className="CartForm basis-1/2 px-4 sm:px-8 md:px-12 lg:px-16">
      <h5 className="text-[#F7941D] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight">
        Continue purchasing
      </h5>
      <p className="text-lg sm:text-xl font-light text-[#606060] uppercase mt-2">
        Please add your contact information
      </p>

      <Formik
        initialValues={{ name: "", email: "", phone: "", whatsapp: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form Data:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col items-start gap-10 mt-8">
            {[
              { name: "name", placeholder: "Name", icon: nameIcon },
              { name: "email", placeholder: "Email", icon: emailIcon },
              { name: "phone", placeholder: "Phone", icon: phoneIcon },
              { name: "whatsapp", placeholder: "WhatsApp", icon: whatsappIcon },
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
              className="bg-[#0076B1] px-10 py-3 rounded-md text-lg sm:text-xl font-semibold text-white uppercase mt-4 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;
