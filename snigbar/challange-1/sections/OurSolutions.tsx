import SolutionsBanner from "@/components/SolutionsBanner/SolutionsBanner";
import IconButtons from "@/sections/IconButtons";
import SectionHeading from "@/components/utilities/SectionHeading";
import { UmbrellaIcon } from "@/components/utilities/icons";
import React from "react";

const OurSolutions = () => {
  return (
    <div
      className="w-full flex justify-center items-center flex-col gap-4 my-8"
      id="solution"
    >
      <IconButtons Icon={UmbrellaIcon} text="Our Solution" />
      <SectionHeading
        heading="Streamlining operations,
    unleashing seamless digital
    solutions"
        subHeading="Innovative solutions for seamless digital transformation."
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {/* solution banners */}
        <SolutionsBanner
          imageLink="/solution1.png"
          heading="FYTOBYTE LIMITED Solutions"
        />
        <SolutionsBanner
          imageLink="/solution2.png"
          heading="FYTOBYTE LIMITED Solutions"
        />
        <SolutionsBanner
          imageLink="/solution3.png"
          heading="FYTOBYTE LIMITED Solutions"
        />
        <SolutionsBanner
          imageLink="/solution4.png"
          heading="FYTOBYTE LIMITED Solutions"
        />
      </div>
    </div>
  );
};

export default OurSolutions;
