import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logofooter.png";
import insta from "@/assets/icons/insta.svg";
import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import youtube from "@/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] pt-[120px] pb-8">
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
              Delta Misr Plastic Factories Delpak manufactures plastic
              containers (coloured, transparent and opaque) for many consumer
              goods and industrial products
            </p>
            <div className="flex items-center gap-4">
              <Image src={insta} alt="Instagram" />
              <Image src={facebook} alt="Facebook" />
              <Image src={twitter} alt="Twitter" />
              <Image src={youtube} alt="YouTube" />
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-extrabold text-lg text-textMain mb-4">
              Contacts
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="text-lg font-normal text-textMain"
                  href="mailto:Delpack@gmail.com"
                >
                  Delpack@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="underline text-lg font-normal text-textMain"
                  href="tel:+201002860990"
                >
                  <bdi>+2 01002860990</bdi>
                </a>
              </li>
              <li>
                <a
                  className="underline text-lg font-normal text-textMain"
                  href="tel:+201002860990"
                >
                  <bdi>+2 01002860990</bdi>
                </a>
              </li>
              <li>
                <a
                  className="underline text-lg font-normal text-textMain"
                  href="tel:0404341346"
                >
                  <bdi>040 4341346</bdi>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-extrabold text-lg text-textMain mb-4">
              Location
            </h4>
            <a
              className="underline text-lg font-normal text-textMain block w-[90%]"
              href="https://www.google.com/maps/dir//%D9%85%D9%8A%D8%AA+%D8%AD%D9%88%D8%A7%D9%8A%D8%8C+%D8%A7%D9%84%D8%B3%D9%86%D8%B7%D9%87%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9+6655280%E2%80%AD/@30.7853506,31.186343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14f7c6f4a2199499:0x61fb471699306a6!2m2!1d31.1163028!2d30.7853694?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meit Haway, Al Santah, El Qorasheya Rd, Gharbiya
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
