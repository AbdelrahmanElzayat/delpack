"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import eg from "@/assets/icons/aricon.svg";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About us",
      href: "/about-us",
    },
    {
      name: "Catalogue",
      href: "/catalogue",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Contact us",
      href: "/contact-us",
    },
  ];

  return (
    <header
      className="fixed left-5 right-5 border border-white bg-header-gradient backdrop-blur-custom z-[1000]"
      style={{ top: isScrolled ? "0" : "24px" }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="h-full">
            <Image src={logo} alt="logo" className="object-contain"/>
          </div>
          <nav>
            <ul className="flex items-center justify-center h-[70px] w-full gap-3">
              {links?.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    pathname === item?.href ? "relative" : ""
                  } h-full px-5 text-center flex justify-center items-center`}
                >
                  <Link
                    href={item?.href}
                    className="text-white text-lg font-normal z-10"
                  >
                    {item?.name}
                  </Link>
                  <div
                    className={`w-full h-full bg-[#F7941DA8] -skew-x-[45deg] transition-transform duration-300 ease-in-out ${
                      pathname === item?.href ? "absolute block" : "hidden"
                    } bottom-0 left-0`}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>
          <Image src={eg} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
