import React from "react";

interface Props {
  Icon: React.FC;
  text: string;
}

const iconButtons = ({ Icon, text }: Props) => {
  return (
    <div className="flex justify-between items-center px-2 py-1 gap-4 border-primary-dark dark:border-white rounded-full">
      <p>{text}</p>
      <Icon />
    </div>
  );
};

export default iconButtons;
