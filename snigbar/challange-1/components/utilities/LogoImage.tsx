"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const LogoImage = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Image
      src={resolvedTheme === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="logo"
      width={150}
      height={100}
      className="w-28 sm:w-32 md:w-40"
    />
  );
};

export default LogoImage;
