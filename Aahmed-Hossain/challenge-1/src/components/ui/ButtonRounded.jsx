"use client"

const ButtonRounded = ({ text, icon }) => {
  return (
    <button className="flex gap-2 rounded-full justify-center items-center py-2 w-[11rem] border border-black font-semibold text-md">
      <p>{text}</p>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default ButtonRounded;
