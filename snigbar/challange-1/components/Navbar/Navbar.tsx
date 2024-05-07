"use client";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import LogoImage from "../utilities/LogoImage";
import MobileMenuButton from "../utilities/MobileMenuButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinksStyle =
    "border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white";

  return (
    <nav
      className={`z-50 mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-3 text-white md:rounded-full ${
        scrollY > 350 ? "bg-white shadow-md dark:bg-white/40" : "md:bg-white/25"
      } w-full md:w-11/12 lg:w-3/4 fixed md:top-4 backdrop-blur-md`}
    >
      <LogoImage />
      <ul className="hidden md:flex items-center justify-between gap-4 text-primary-blue dark:text-white text-[15px]">
        <Link href="/#home" className={navlinksStyle}>
          Home
        </Link>
        <Link href="/#services" className={navlinksStyle}>
          Services
        </Link>
        <Link href="/#solution" className={navlinksStyle}>
          Solution
        </Link>
        <Link href="/#faq" className={navlinksStyle}>
          FAQ
        </Link>
        <Link href="about" className={navlinksStyle}>
          About
        </Link>
        <Link href="/#knowledge" className={navlinksStyle}>
          Blog
        </Link>
        <Link href="contact" className={navlinksStyle}>
          Contact Us
        </Link>
      </ul>
      <div className="flex justify-between items-center gap-2 md:gap-4">
        <ThemeSwitch />
        {/* sign up button */}
        <button className="px-3 lg:px-6 py-2 rounded-full bg-gray-800 md:bg-primary-dark/80  font-light text-sm">
          sign up
        </button>
        <MobileMenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
