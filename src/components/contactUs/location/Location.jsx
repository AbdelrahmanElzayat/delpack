import React from "react";
import s1 from "@/assets/icons/instaSocial.svg";
import s2 from "@/assets/icons/faceSocial.svg";
import s3 from "@/assets/icons/twitterSocial.svg";
import s4 from "@/assets/icons/youtubesocial.svg";
import s5 from "@/assets/icons/linkedinsocial.svg";
import Image from "next/image";
const Location = () => {
  const socials = [s1, s2, s3, s5, s4];
  return (
    <section className="pb-20">
      <div className="container">
        <div className="w-full h-[300px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35390.35252934878!2d31.151480236531626!3d30.78382763149614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c6f4a2199499%3A0x61fb471699306a6!2z2K_ZhNiq2Kcg2YXYtdixINmE2YTYqNmE2KfYs9iq2YrZgyDZiNin2YTYqtis2KfYsdipINmI2KfZhNiq2YjYstmK2LkgLSDYr9mE2KjYp9mDINi0LtmFLtmF!5e0!3m2!1sar!2seg!4v1738011375930!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className=""
          ></iframe>
        </div>
        <div className="w-full h-[50px] sm:h-[80px] md:h-[100px] lg:h-[169px] bg-socials flex justify-around items-center gap-3">
          {socials?.map((item, i) => (
            <a href="##" className="flex justify-center items-center">
                <Image src={item} alt={`social ${i}`} key={i} className="w-5 h-5 md:w-full md:h-full"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
