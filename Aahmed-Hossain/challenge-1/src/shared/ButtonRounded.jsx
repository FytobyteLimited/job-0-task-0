
import React from "react";

const ButtonRounded = ({ text, Icon }) => {
  return (
    <button className="flex gap-2 rounded-full justify-center items-center py-2 w-[10rem] border border-black font-semibold text-md">
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};

export default ButtonRounded;
