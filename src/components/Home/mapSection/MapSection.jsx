import Link from "next/link";
import React from "react";

const MapSection = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[500px]">
      <Link
        href="/contact"
        className="pt-3 sm:pt-5 pb-3 sm:pb-4 px-4 sm:px-12 rounded-full bg-[#046AAF] text-white text-sm sm:text-base md:text-lg lg:text-2xl font-light text-center absolute -top-7 -md:top-10 left-1/2 -translate-x-1/2 shadow-lg hover:bg-[#035799] transition"
      >
        CONTACT US
      </Link>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35390.35252934878!2d31.151480236531626!3d30.78382763149614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c6f4a2199499%3A0x61fb471699306a6!2z2K_ZhNiq2Kcg2YXYtdixINmE2YTYqNmE2KfYs9iq2YrZgyDZiNin2YTYqtis2KfYsdipINmI2KfZhNiq2YjYstmK2LkgLSDYr9mE2KjYp9mDINi0LtmFLtmF!5e0!3m2!1sar!2seg!4v1738011375930!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default MapSection;
