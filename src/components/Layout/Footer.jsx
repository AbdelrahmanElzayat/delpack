import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logofooter.png";
import insta from "@/assets/icons/insta.svg";
import facebook from "@/assets/icons/facebook.svg";
// import twitter from "@/assets/icons/twitter.svg";
// import youtube from "@/assets/icons/youtube.svg";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations();
  return (
    <footer className="bg-[#D9D9D9] xl:pt-[120px] lg:pt-[100px] md:pt-[80px] sm:pt-[60px] pt-10 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Image
              src={logo}
              alt="logo"
              className="h-[62px] w-[260px] object-contain"
            />
            <p className="text-textMain text-base font-normal">
              {t("company_description")}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/delpack_eg?igsh=MWRsc200MXhrMDByNA==">
                <Image src={insta} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/share/1A7pC4UHZE/">
                <Image src={facebook} alt="Facebook" />
              </a>
              {/* <Image src={twitter} alt="Twitter" />
              <Image src={youtube} alt="YouTube" /> */}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-extrabold text-lg text-textMain mb-4">
              {t("contacts")}
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 xl:grid lg:grid-cols-2 gap-2">
              <li>
                <a
                  className="text-sm font-normal text-textMain"
                  href="mailto:Sales@dc-egy.com"
                >
                  Sales@dc-egy.com
                </a>
              </li>
              <li>
                <a
                  className="underline text-sm font-normal text-textMain"
                  href="tel:+201012248667"
                >
                  <bdi>+2 01012248667</bdi>
                </a>
              </li>
              <li>
                <a
                  className="underline text-sm font-normal text-textMain"
                  href="tel:0404341346"
                >
                  <bdi>040 4341346</bdi>
                </a>
              </li>
              <li>
                <a
                  className="underline text-sm font-normal text-textMain"
                  href="tel:0404340505"
                >
                  <bdi>040 4340505</bdi>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-extrabold text-lg text-textMain mb-4">
              {t("location")}
            </h4>
            <a
              className="underline text-sm font-normal text-textMain block w-[90%]"
              href="https://www.google.com/maps/dir//%D9%85%D9%8A%D8%AA+%D8%AD%D9%88%D8%A7%D9%8A%D8%8C+%D8%A7%D9%84%D8%B3%D9%86%D8%B7%D9%87%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+6655280%E2%80%AD/@30.7853506,31.186343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14f7c6f4a2199499:0x61fb471699306a6!2m2!1d31.1163028!2d30.7853694?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("place")}
            </a>
          </div>
        </div>
        <p className="text-center mt-10 text-sm font-normal text-[#333]">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
