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
    keywords:
      lang === "en"
        ? "plastic containers, transparent containers, plastic bottles, juice bottles, oil bottles, jars, plastics, cosmetics, bottle, olive oil, oil, creams, cylinders, easy open, cans, shampoo containers, juice containers, cream containers, packaging, packaging and wrapping"
        : "عبوات بلاستيك, عبوات شفافه, زجاجات بلاستيك, زجاجات عصير, زجاجات زيت, برطمانات, بلاستيك, كوزمتكس, عبوه, زيت زيتون, زيت, كريمات, سلندرات, ايزي اوبن, كانز, عبوات شامبو, عبوات عصير, عبوات كريم, عبوات تعبئه, تعبئه وتغليف",
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
