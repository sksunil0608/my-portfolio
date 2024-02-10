"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Socials } from "@/constants";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[2A0E61]/50bg-[#3141417] backdrop-blur-md z-50 px-10">
      <div className="relative">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#about" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:flex text-gray-300">
              Sunil Portfolio
            </span>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className=" hidden lg:flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#300145e] mr-[15px] px-[20px] py-[10px]  rounded-full text-gray-200">
              <a href="#about" className="cursor-pointer">
                About Me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
              <a href="#work" className="cursor-pointer">
                Work Experience
              </a>
            </div>
          </div>
          {/* Toggle menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={!menuOpen ? toggleMenu : closeMenu}
              className="text-gray-200 focus:outline-none border-2 border-red-400 rounded-lg px-3"
            >
              {!menuOpen ? "☰" : "✕"}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#300145e] py-2 px-4">
              <a href="#about" className="block text-gray-200 py-2">
                About Me
              </a>
              <a href="#skills" className="block text-gray-200 py-2">
                Skills
              </a>
              <a href="#projects" className="block text-gray-200 py-2">
                Projects
              </a>
              <a href="#work" className="block text-gray-200 py-2">
                Work Experience
              </a>
            </div>
          )}

          <div className="hidden md:flex flex-row gap-5 ">
            {Socials.map((social) => (
              <a href={social.link} target="_blank" key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
