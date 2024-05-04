import SectionHeading from "@/components/utilities/SectionHeading";
import { UmbrellaIcon } from "@/components/utilities/icons";

export const OurServices = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
      <div className="flex justify-between items-center p-2 rounded-full">
        <p>Our Services</p>
        <UmbrellaIcon />
      </div>
      <SectionHeading
        heading="Transform your tech
business with tailored
services"
        subHeading="Websites / Applications / Web3 / Blockchain"
      />
    </div>
  );
};
