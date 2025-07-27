import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  keywords: string;
  github: string;
}
const ProjectCard = ({ src, title, description, keywords, github }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={800}
        className="w-full object-contain"
      />
      <div className="relative p-4 ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-justify">{description}</p>
      </div>
      <p className="px-4 text-pink-300 font-bold">{keywords}</p>
      <p className="px-4 text-white">
        Project Link:{" "}
        <span className="text-blue-300">
          <a href={github} target="_blank">
            {github}
          </a>
        </span>
      </p>
    </div>
  );
};

export default ProjectCard;
