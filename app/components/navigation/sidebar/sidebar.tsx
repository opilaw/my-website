"use client"
import Link from "next/link";
import { motion, useAnimation,  useScroll,
	useTransform,
	useSpring, 
  Variants} from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const variants: Variants = {
open: {
  opacity: 1,
  y:0,
  transition: {type: "spring", stiffness: 300, damping: 24},
  
}, 
closed: {opacity: 0, y: 20, transition: {duration: 0.2}}

}
const Sidebar = ({
  isOpen,
  toggle,
  
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {

  return (
    <>
      <motion.div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
      style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}  
        initial={false} animate={isOpen ? "open": "closed"}
      >
        <button className="absolute right-0 p-5" onClick={toggle} 
       
        >
           <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
          </motion.div>
        </button>

        <motion.ul className="sidebar-nav text-center leading-relaxed text-xl"
         variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={variants}>
            <Link href="/about" onClick={toggle}>
              <p>About Us</p>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            <Link href="/services" onClick={toggle}>
              <p>Services</p>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            <Link href="/contacts" onClick={toggle}>
              <p>Contacts</p>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Sidebar;