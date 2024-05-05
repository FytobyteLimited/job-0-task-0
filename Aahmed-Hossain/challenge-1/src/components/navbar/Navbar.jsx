"use client"
import React from "react";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import logo from "../../../public/images/logo-navbar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = ({ dark, setDark }) => {
  const toggleMood = () => {
    setDark((prevDark) => !prevDark);
  };
  const pathName = usePathname();
  return (
    <div className="navbar relative backdrop-blur-xl rounded-full flex justify-between items-center p-2 z-50">
      <div className="navbar-start">
        <div>
        <Link href="/">
              
          <Image className='w-[120px] lg:w-[140px]' src={logo} alt="logo" />
           </Link>
        </div>
        <div className="dropdown absolute right-[5vw]">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 me-6 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">
          <Link
              href="/"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/about" ? " border-b-2 border-b-[#224192]" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/contact" ? " border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/blog" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/service"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/service" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Service
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex absolute lg:left-[25vw]">
        <ul className="menu menu-horizontal px-1">
        <Link
              href="/"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/about" ? " border-b-2 border-b-[#224192]" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/contact" ? " border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/blog" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/service"
              className={`text-[#224192] text-xl m-2 ${
                pathName === "/service" ? "border-b-2 border-b-[#224192]" : ""
              }`}
            >
              Service
            </Link>
        </ul>
      </div>
      
      <div className="navbar-end flex items-center absolute lg:right-[1vw] right-[20vw]">
      <button className='bg-black  rounded-full text-white py-1 px-2 text-sm mr-2'>
        <span className="hidden lg:block ">Talk with Us</span>
        <span className="visible lg:hidden">Sign Up</span>
        </button>
        {dark ? (
          <button onClick={toggleMood}>
            <MdSunny />
          </button>
        ) : (
          <button onClick={toggleMood}>
            <FaMoon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
