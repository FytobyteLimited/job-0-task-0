"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`${
            dark ? "text-white bg-black" : "text-black bg-white"
          } overflow-x-hidden min-h-screen `}
        >
          <div className="w-full lg:w-11/12 px-1 lg:px-0 mx-auto py-4">
            <Navbar dark={dark} setDark={setDark} />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
