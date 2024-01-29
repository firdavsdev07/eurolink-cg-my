import React from "react";
import imgs from "../assets/images/vtudio.svg";
import SkillCard from "./SkillCard";

const Skills = ({ data }) => {
  return (
    <div className="py-12 sm:py-16" id="skill">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-colorT sm:text-4xl">
          My skill
        </h2>
        <p className="mt-6 mb-6 text-lg leading-8 text-lightText">
          What are my programming skills?
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 pt-12 px-6 lg:px-8 xl:grid-cols-2">
        <ul
          role="list"
          className="grid gap-x-10 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {data.map((item) => (
            <SkillCard
              key={item.id}
              icon={item.icon}
              name={item.name}
              text={item.text}
            />
          ))}

          <li>
            <div className="flex items-center gap-x-6">
              <img className="h-16 w-16 rounded-full" src={imgs} alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-lightText">
                  Integrated development environment
                </h3>
                <p className="text-sm font-semibold leading-6 text-colorT">
                  VISUAL STUDIO
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
