"use client"
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

import Logo from '@/public/logo.png'


const Navbar = ({toggle}: {toggle: ()=>void}) => {


  
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
            <Image src={Logo}  width={100}
      height={100}
      alt="Olga Pilawka logo" />
      </Link>
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/resume">
                  <p >Resume</p>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <p>Research Papers and Articles</p>
                </Link>
              </li>
              <li>
                <Link href="/artwork">
                  <p>My artwork</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;