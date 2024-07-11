import React from "react";
import { skills } from "../utils/constants";
import { SectionWrapper } from "../hoc";

const Technologies = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {skills.map((skill) => (
        <div
          className="w-28 h-28 transition-transform transform hover:scale-125"
          key={skill.name}
        >
          <img src={skill.icon} alt={skill.name} />
          <p className="text-center text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Technologies, "");
