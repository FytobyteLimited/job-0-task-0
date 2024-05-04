"use client";
import { useTheme } from "next-themes";
import React from "react";

export function UmbrellaIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
    >
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M22.002 24.867V4.719a1.41 1.41 0 00-1.406-1.407H4.66A1.41 1.41 0 003.252 4.72v20.625a2.35 2.35 0 002.344 2.343h19.219"
      ></path>
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M24.815 27.688a2.812 2.812 0 01-2.813-2.813V8h4.22a1.406 1.406 0 011.405 1.406v15.469a2.813 2.813 0 01-2.812 2.813z"
      ></path>
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M14.502 8h3.75m-3.75 3.75h3.75M7.002 15.5h11.25m-11.25 3.75h11.25M7.002 23h11.25"
      ></path>
      <path
        fill={resolvedTheme === "dark" ? "white" : "black"}
        d="M10.752 12.688h-3.75a.938.938 0 01-.937-.938V8a.937.937 0 01.937-.938h3.75A.938.938 0 0111.69 8v3.75a.937.937 0 01-.938.938z"
      ></path>
    </svg>
  );
}
