import React from "react";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { DotGothic16 } from "next/font/google";

const dotGothic = DotGothic16({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className="w-full h-20 top-0 bg-white sticky border-t border-1 border-gray-400">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items center h-full">
          <Link href="/">
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Olga Pilawka logo"
            />
          </Link>
          <div className="flex items-center flex-wrap gap-2">
            <span className={dotGothic.className}>Contact:</span>
            <span>olga.pilawka@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
