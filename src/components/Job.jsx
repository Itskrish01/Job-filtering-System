import React, { useContext } from "react";
import { ContextFilter } from "../ContextFilter";

const Job = (job) => {
  const { AddFilterItem } = useContext(ContextFilter);
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job.job;

  const technologies = [...tools, ...languages, role, level];

  return (
    <div
      className={`flex flex-col sm:flex-row relative bg-white rounded-lg job-card gap-8 px-7 py-8 ${
        featured ? "border-l-[6px] border-[#629f9e]" : ""
      }`}
    >
      <img
        src={logo}
        alt=""
        className="sm:static sm:h-auto sm:w-auto absolute h-14 w-14 top-[-30px] left-5"
      />
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex gap-2 items-center">
          <h6 className=" font-semibold text-[#68a39d]">{company}</h6>
          {isNew && (
            <div className="bg-[#629f9e] text-sm px-2.5 rounded-full text-white">
              NEW!
            </div>
          )}

          {featured && (
            <div className="bg-[#2c3937] text-sm px-2.5  rounded-full text-white">
              FEATURED
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <h6 className="font-semibold text-lg sm:text-xl hover:text-[#629f9e] cursor-pointer transition text-[#2c3937]">
            {position}
          </h6>
        </div>
        <div className="flex gap-2 text-sm text-gray-400 items-center">
          <p>{postedAt}</p>
          <span>•</span>
          <p>{contract}</p>
          <span>•</span>
          <p>{location}</p>
        </div>
      </div>
      <div className="flex gap-3 cursor-pointer  flex-wrap items-center sm:flex-nowrap">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            onClick={() => AddFilterItem(tech)}
            className="bg-[#eef7f6] text-[#68a39d] hover:bg-[#68a39d] hover:text-white rounded px-2 py-1"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
