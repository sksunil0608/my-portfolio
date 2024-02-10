import Image from "next/image";
import React from "react";

interface Props {
  company: string;
  description: string;
  src: string;
  alt: string;
  position: string;
  from: string;
  to: string;
}
const WorkCard = ({
  company,
  description,
  src,
  alt,
  position,
  from,
  to,
}: Props) => {
  return (
    <div className=" flex flex-col  rounded-lg shadow-lg border border-[#2A0E61] mx-[15px]">
      <div className="flex flex-row justify-between  mx-2 py-2">
        <div className="flex flex-row justify-start">
          <Image
            src={src}
            alt={alt}
            width={40}
            height={40}
            className=" object-contain rounded-full"
          />
          <h1 className=" pt-2 font-semibold text-white mx-[8px]">{company}</h1>
        </div>
        <p className="text-white pt-2">
          {from}-{to}
        </p>
      </div>
      <div className="relative px-4 pb-3">
        <h1 className="text-white">{position}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
