import ContactForm from "@/components/contactUs/contactForm/ContactForm";
import ContactInfo from "@/components/contactUs/contactInfo/ContactInfo";
import HeroContact from "@/components/contactUs/HeroContact/HeroContact";
import Location from "@/components/contactUs/location/Location";
import React from "react";

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
