"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import eg from "@/assets/icons/aricon.svg";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Set hash on mount
    setHash(window.location.hash);

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

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
      href: "/#about-us",
    },
    {
      name: "Catalogue",
      href: "/catalogue",
    },
    {
      name: "News",
      href: "/#news",
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
        <div className="flex justify-between items-center gap-3 py-4 lg:py-0">
          <Link href={"/"} className="h-full flex-1 lg:flex-none">
            <Image
              src={logo}
              alt="logo"
              className="object-contain w-32 sm:w-40"
            />
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-center h-[70px] w-full">
              {links?.map((item, index) => {
                const cleanHash = hash?.replace("#", "").replace("/", "");
                const cleanHref = item?.href.replace("/#", "").replace("/", "");
                const cleanPathname = pathname.replace("/", "");
                const isActive = hash
                  ? cleanHash === cleanHref
                  : cleanPathname === cleanHref ||
                    (cleanHref.includes("news") &&
                      cleanPathname.includes("news"));

                return (
                  <li
                    key={index}
                    className={`h-full px-5 text-center flex justify-center items-center ${
                      isActive ? "relative" : ""
                    }`}
                  >
                    <Link
                      href={item?.href}
                      className="text-white text-lg font-normal z-10"
                    >
                      {item?.name}
                    </Link>
                    <div
                      className={`w-full h-full bg-[#F7941DA8] -skew-x-[45deg] transition-transform duration-300 ease-in-out ${
                        isActive ? "absolute block" : "hidden"
                      } bottom-0 left-0`}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className="cursor-pointer">
            <Image src={eg} alt="changelang" className="w-6 sm:w-8" />
          </button>

          {/* *********************** */}
          <button
            className="lg:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-1 bg-white rounded"></span>
            <span className="w-6 h-1 bg-white rounded"></span>
            <span className="w-6 h-1 bg-white rounded"></span>
          </button>
          {/* **************************** */}
        </div>
        {/* ****************************** */}
        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col items-center gap-4 bg-black/90 py-4 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-white text-lg ${
                pathname === item.href ? "text-orange-400" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* ****************************** */}
      </div>
    </header>
  );
};

export default Header;
