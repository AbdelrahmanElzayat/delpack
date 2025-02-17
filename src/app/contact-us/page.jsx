import ContactForm from "@/components/contactUs/contactForm/ContactForm";
import ContactInfo from "@/components/contactUs/contactInfo/ContactInfo";
import HeroContact from "@/components/contactUs/HeroContact/HeroContact";
import Location from "@/components/contactUs/location/Location";
import { cookies } from "next/headers";
import React from "react";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";

  return {
    title: lang === "en" ? "DELPACK || contact-us" : "ديلباك || تواصل معنا",
    description:
      lang === "en"
        ? "Get in touch for inquiries, collaborations, or support"
        : "تواصل معنا للاستفسارات أو التعاون أو الدعم",
  };
}

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroContact />
      <ContactForm />
      <ContactInfo />
      <Location />
    </div>
  );
};

export default page;
