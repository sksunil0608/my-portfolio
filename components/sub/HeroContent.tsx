"use client";
import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-40 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="hidden lg:text-[13px] Welcome-text ">
            My Full Stack Developer Portfolio
          </h1>
          <h1 className="lg:hidden font-bold ">
            My Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-600px w-auto h-auto"
        >
          <span>
            Hi There,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I&apos;m Sunil{"  "}
            </span>
            Explore my works Here.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 text-justify max-w-[600px]"
        >
          I&apos;m a Full Stack Software developer with a strong foundation in
          programming and a deep passion for tackling real-world issues. My
          self-directed learning style empowers me to stay at the forefront of
          industry trends, ensuring that my skills are always relevant and my
          solutions are impactful..
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center py-20"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
