import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="py-2  px-7 rounded-full mt-4 mb-5 outline  text-lightText hover:text-colorT transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
