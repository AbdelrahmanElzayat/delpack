import ContactForm from "@/components/contactUs/contactForm/ContactForm";
import ContactInfo from "@/components/contactUs/contactInfo/ContactInfo";
import HeroContact from "@/components/contactUs/HeroContact/HeroContact";
import Location from "@/components/contactUs/location/Location";
import { cookies } from "next/headers";
import React from "react";

const lang = cookies().get("lang")?.value || "en";
export const metadata = {
  title: lang === "en" ? "DELPACK || contact-us" : "ديلباك || تواصل معنا",
  description:
    lang === "en"
      ? "Get in touch for inquiries, collaborations, or support"
      : "تواصل معنا للاستفسارات أو التعاون أو الدعم",
};
const page = () => {
  return (
    <div children>
      <HeroContact />
      <ContactForm />
      <ContactInfo />
      <Location />
    </div>
  );
};

export default page;
