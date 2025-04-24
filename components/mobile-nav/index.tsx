"use client";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../header";
import { perspective } from "./anim";
import Link from "next/link";

const menu = {
  open: {
    width: "100%",
    height: "100%",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "0px",
    height: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1]
    }
  }
};
type Props = {
  isActive: boolean;
};

export default function MobileNav({ isActive }: Props) {
  return (
    <>
      {isActive && (
        <AnimatePresence>
          <div className={`fixed z-[100] inset-0  h-full w-full top-16`}>
            <motion.div
              className="bg-black relative "
              variants={menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <div className="flex gap-4 flex-col justify-center  max-w-xs px-10 h-[80%] ">
                {navLinks.map((link, i) => {
                  const { path, name } = link;
                  return (
                    <div key={`b_${i}`}>
                      <motion.div
                        className=""
                        custom={i}
                        variants={perspective}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                      >
                        <Link
                          href={path}
                          className="text-white text-2xl text-left"
                        >
                          {name}
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
