"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import MobileNav from "../mobile-nav";

export const navLinks = [
  { name: "Product", path: "#" },
  { name: "Services", path: "#" },
  { name: "About", path: "#" }
];

const THRESHOLD = 200;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > THRESHOLD && currentScrollY > scrollY) {
        setIsVisible(false);
      } else if (currentScrollY < scrollY) {
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
      setShowShadow(currentScrollY > THRESHOLD);
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <nav>
      <motion.div
        className={`fixed top-0 left-0 right-0 px-3 sm:py-4 py-2 md:py-0 z-10 ${
          showShadow ? "shadow" : ""
        }`}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 z-10"></div>
        <div className="absolute bg-white -z-0 inset-0"></div>
        <div className="relative py-2 md:py-6 z-50">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="Company logo" />
            </Link>
            <ul className="hidden items-center md:flex gap-3.5 md:gap-5 lg:gap-8 text-primary">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className="font-semibold"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#"
                className="font-bold border-2 border-primary rounded-full py-1.5 px-10"
              >
                Log In
              </Link>
            </ul>
            <button
              title="Icon"
              onClick={() => setIsActive(!isActive)}
              className="w-10 h-5 flex md:hidden flex-col justify-between items-center group z-[1000]"
            >
              <motion.span
                className="block w-6 h-[2px] origin-center"
                animate={
                  isActive
                    ? { rotate: 45, y: 8, backgroundColor: "#181818" }
                    : {
                        rotate: 0,
                        y: 0,
                        backgroundColor: "#181818"
                      }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-6 h-[2px] origin-center"
                animate={
                  isActive
                    ? { opacity: 0 }
                    : {
                        opacity: 1,
                        backgroundColor: "#181818"
                      }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="block w-6 h-[2px]"
                animate={
                  isActive
                    ? { rotate: -45, y: -10, backgroundColor: "#181818" }
                    : {
                        rotate: 0,
                        y: 0,
                        backgroundColor: "#181818"
                      }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.div>
      <div className="block md:hidden">
        <MobileNav isActive={isActive} />
      </div>
    </nav>
  );
};

export default Header;
