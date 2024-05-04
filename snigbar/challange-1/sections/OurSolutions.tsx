import SolutionsBanner from "@/components/SolutionsBanner/SolutionsBanner";
import IconButtons from "@/components/utilities/IconButtons";
import SectionHeading from "@/components/utilities/SectionHeading";
import { UmbrellaIcon } from "@/components/utilities/icons";
import Image from "next/image";
import React from "react";

const OurSolutions = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 my-8">
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
