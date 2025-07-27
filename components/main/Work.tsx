import React from "react";
import { Fragment } from "react";
import WorkCard from "../sub/WorkCard";
import { WorkExperience } from "@/constants";
const Work = () => {
  return (
    <div id="work" className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Works
      </h1>

      <ul className="md:flex md:flex-wrap mx-10">
        {WorkExperience.map((work, index) => (
          <Fragment key={index}>
            {index % 2 !== 0 && <div className="md:w-1/2"></div>}
            <div className="absolute w-px h-[300px] md:h-[1070px] bg-gray-400 sm:left-0 border-1 md:left-1/2"></div>
            <li className="md:w-1/2 mb-8 relative">
              <WorkCard
                src={work.src}
                alt={work.alt}
                company={work.company}
                description={work.description}
                from={work.from}
                to={work.to}
                position={work.position}
              />
              <div
                className={`absolute top-1/2 -mt-2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400 border-2 border-white ${
                  index % 2 === 0 ? "md:-right-6" : "md:left-2"
                }`}
              ></div>
            </li>
            {index % 2 === 0 && <div className="md:w-1/2"></div>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Work;
