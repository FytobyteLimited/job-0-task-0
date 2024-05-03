import React from "react";

const TextGradiant = ({text}) => {
  return (
    <h1 className="text-center font-extrabold text-5xl text-gradient mt-3" dangerouslySetInnerHTML={{ __html: text }}>
    </h1>
  );
};

export default TextGradiant;
