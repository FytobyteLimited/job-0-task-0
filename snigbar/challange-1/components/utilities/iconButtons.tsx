import React from "react";

interface Props {
  Icon: React.FC;
  text: string;
}

const IconButtons = ({ Icon, text }: Props) => {
  return (
    <div className="flex justify-between items-center gap-4 border border-primary-dark dark:border-white rounded-full px-4 py-1">
      <p className="text-sm">{text}</p>
      <Icon />
    </div>
  );
};

export default IconButtons;
