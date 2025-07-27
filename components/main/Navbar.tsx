"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Socials } from "@/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#1b1b1b]/70 backdrop-blur-md z-50 px-5 md:px-10 pt-4 shadow-lg">
      <div className="flex justify-between items-center h-full">
        {/* Logo and Title */}
        <a href="#about" className="flex items-center gap-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={64}
              height={64}
              className="w-full h-full object-contain cursor-pointer hover:animate-spin"
            />
          </div>
          <span className="font-bold hidden md:flex text-gray-300 text-lg">
            Sunil Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between w-[500px] border border-[#7042f861] bg-[#300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="#about" className="cursor-pointer hover:text-white">About Me</a>
          <a href="#skills" className="cursor-pointer hover:text-white">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-white">Projects</a>
          <a href="#work" className="cursor-pointer hover:text-white">Work</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 text-3xl focus:outline-none border border-purple-400 rounded-lg px-3 py-1"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[65px] left-0 right-0 bg-[#300145] bg-opacity-95 backdrop-blur-md z-40 p-6">
          <a onClick={closeMenu} href="#about" className="block text-gray-200 py-2">About Me</a>
          <a onClick={closeMenu} href="#skills" className="block text-gray-200 py-2">Skills</a>
          <a onClick={closeMenu} href="#projects" className="block text-gray-200 py-2">Projects</a>
          <a onClick={closeMenu} href="#work" className="block text-gray-200 py-2">Work</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
