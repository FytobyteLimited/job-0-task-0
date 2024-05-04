import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { navLinkStyle } from "@/shared/constants";
import LogoImage from "../utilities/LogoImage";
import MobileMenuButton from "../utilities/MobileMenuButton";

const Navbar = () => {
  return (
    <nav className="z-20 mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-3 text-white md:rounded-full md:bg-white/25 w-full md:w-11/12 lg:w-2/3 fixed top-4 backdrop-blur-md">
      <LogoImage />
      <ul className="hidden md:flex items-center justify-between gap-4 text-primary-blue dark:text-white text-[15px]">
        <Link href="#" className={navLinkStyle}>
          Home
        </Link>
        <Link href="#" className={navLinkStyle}>
          Services
        </Link>
        <Link href="#" className={navLinkStyle}>
          Solution
        </Link>
        <Link href="#" className={navLinkStyle}>
          FAQ
        </Link>
        <Link href="#" className={navLinkStyle}>
          About
        </Link>
        <Link href="#" className={navLinkStyle}>
          Blog
        </Link>
      </ul>
      <div className="flex justify-between items-center gap-2 md:gap-4">
        <ThemeSwitch />
        <MobileMenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
