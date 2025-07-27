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
    <div className="flex flex-col rounded-lg shadow-lg border border-[#2A0E61] mx-4 mb-4">
      {/* Top Section: Logo + Company + Duration */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={src}
            alt={alt}
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <h1 className="font-semibold text-white">{company}</h1>
        </div>
        <p className="text-white text-sm sm:text-base">
          {from} - {to}
        </p>
      </div>

      {/* Bottom Section: Position + Description */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-medium">{position}</h2>
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
