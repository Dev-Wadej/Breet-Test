"use client";

import Image from "next/image";
import React from "react";
import { footerLinks } from "./utils";
import Link from "next/link";
import logo from "@/assets/svgs/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative py-12 md:py-20 text-white text-sm px-4 2xl:px-0 `}
    >
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-screen-xl mx-auto gap-10 mt-5 space-y-10 sm:space-y-0">
        <div className="col-span-2">
          <Image src={logo} alt="Company logo" />
          <p className="mt-6 text-sm font-normal text-gray-500/90 w-[16rem] leading-6 ">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className=" text-gray-500/90 text-sm mt-7 font-normal">
            © {year} All rights reserved.
          </p>
        </div>
        <div className="col-span-3 grid grid-cols-3 ">
          {footerLinks.map((links) => (
            <div key={links.name} className="flex flex-col ">
              <h3 className={`font-bold text-base text-primary font-open-sans`}>
                {links.name}
              </h3>
              <ul
                className={`space-y-4 flex-1 flex flex-col justify-between mt-8`}
              >
                {links.children.map((link, idx) => (
                  <li key={idx} className={`text-gray-500/90 font-normal `}>
                    <Link href={link.path}>
                      <span className="underline-hover">{link.desc}</span>

                      {link.type === "hiring" && (
                        <span className="font-black text-xs text-primary bg-secondary px-2 p-0.5 ml-1 rounded-full">
                          Hiring!
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
