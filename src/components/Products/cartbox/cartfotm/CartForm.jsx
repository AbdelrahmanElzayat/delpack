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

const CartForm = ({ productsIncart }) => {
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
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
      toast.success("Order placed successfully!");
      setStatus({ type: "success", message: "Order placed successfully!" });
      dispatch(cartActions.clearCart());
      resetForm();
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      setStatus({
        type: "error",
        message: "Failed to place order. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="CartForm basis-1/2 md:px-12 lg:px-16 w-full">
      <h5 className="text-[#F7941D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-tight">
        Continue purchasing
      </h5>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-[#606060] uppercase mt-2">
        Please add your contact information
      </p>

      <Formik
        initialValues={{ name: "", email: "", phone: "", whatsapp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
              className="bg-[#0076B1] px-6 md:px-8 lg:px-10 py-2 lg:py-3 pt-3 rounded-md text-lg sm:text-xl font-semibold text-white uppercase mt-4 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
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
    </div>
  );
};

export default CartForm;
