import React from "react";

const SkillCard = ({ icon, name, text }) => {
  return (
    <div>
      <li>
        <div className="flex items-center gap-x-6">
          <span className=" text-lightText text-6xl">
            <i className={icon}></i>
          </span>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-lightText">
              {text}
            </h3>
            <p className="text-sm font-semibold leading-6 uppercase text-colorT">
              {name}
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SkillCard;
