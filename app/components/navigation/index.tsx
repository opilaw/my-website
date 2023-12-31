"use client";
import { Variants, motion } from "framer-motion";
import Navbar from "./navbar";
import Sidebar from "./sidebar/sidebar";
import { useState } from "react";



const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
   <motion.nav className="bg-white sticky top-0 shadow-sm">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar  toggle={toggle} />
    </motion.nav>
    </>
  );
};

export default Navigation;

  

