"use client";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  return (
    <nav className="z-20 mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-3 text-white md:rounded-full md:bg-white/25 w-full md:w-11/12 lg:w-2/3 fixed top-4 backdrop-blur-md">
      <Image
        src={resolvedTheme === "light" ? "/logo-light.png" : "/logo-dark.png"}
        alt="logo"
        width={150}
        height={100}
        className="w-28 sm:w-32 md:w-40"
      />

      <ul className="hidden md:flex items-center justify-between gap-4 text-primary-blue dark:text-white text-[15px] font-light">
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          Home
        </Link>
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          Services
        </Link>
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          Solution
        </Link>
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          FAQ
        </Link>
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          About
        </Link>
        <Link
          href="#"
          className="border-b border-b-transparent hover:border-b-primary-blue dark:hover:border-b-white"
        >
          Blog
        </Link>
      </ul>
      <div className="flex justify-between items-center gap-2 md:gap-4">
        <ThemeSwitch />
        <button className="px-3 lg:px-6 py-2 rounded-full bg-gray-800 md:bg-primary-dark/80 font-light text-sm">
          sign up
        </button>
        {/* mobile menu button */}
        <button>
          <svg
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block md:hidden h-8 w-8"
          >
            <path
              d="M41.48 15.5H20.48C17.18 15.5 14.48 12.8 14.48 9.5C14.48 5.75 17.18 3.5 20.48 3.5C23.78 3.5 26.48 6.2 26.48 9.5V39.5C26.48 42.8 29.18 45.5 32.48 45.5C35.78 45.5 38.48 42.8 38.48 39.5C38.48 36.2 35.78 33.5 32.48 33.5H11.48"
              stroke={resolvedTheme === "dark" ? "white" : "black"}
              strokeWidth={4.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="18 94.5"
            />
            <path
              d="M11.48 24.5H41.48"
              stroke={resolvedTheme === "dark" ? "white" : "black"}
              strokeWidth={4.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
