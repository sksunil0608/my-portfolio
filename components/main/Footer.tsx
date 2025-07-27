"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaHackerrank, FaYoutube } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <hr className="my-12 h-px border-t-2 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="lg:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Profiles</div>
            <a
              href="https://auth.geeksforgeeks.org/user/sksuni5u8p"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <Image
                  src="/GeeksforGeeks.png"
                  alt="Geek for Geeks"
                  width={20}
                  height={20}
                />
                <span className="text-[15px] ml-[6px]">Geeks4Geeks</span>
              </p>
            </a>
            <a
              href="https://www.hackerrank.com/profile/sksunil0608"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <Image
                  src="/leetcode.png"
                  alt="Leetcode"
                  width={20}
                  height={20}
                />
                <span className="text-[15px] ml-[6px]">Leetcode</span>
              </p>
            </a>
            <a
              href="https://www.hackerrank.com/profile/sksunil0608"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <FaHackerrank />
                <span className="text-[15px] ml-[6px]">HackerRank</span>
              </p>
            </a>
          </div>
          <div className="lg:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <a href="https://www.linkedin.com/in/sk-sunil" target="_blank">
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
            <a href="" target="_blank">
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
            <a href="#" target="_blank">
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
          </div>
          <div className="lg:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">About</div>
            <a href="https://www.linkedin.com/in/sk-sunil" target="_blank">
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
            <a href="https://github.com/sksunil0608" target="_blank">
              <p className="flex flex-row items-center my-[15px] curosor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
          </div>
        </div>
        <div className="mt-[20px] mb-[20px] text-[15px] text-center">
          <span className="text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Designed with <span className="text-red-700">&hearts;</span> by{" "}
            <a
              href="https://www.linkedin.com/in/sk-sunil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sunil Kumar
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
