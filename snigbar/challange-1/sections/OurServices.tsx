import SectionHeading from "@/components/utilities/SectionHeading";

import { SettingIcon } from "@/components/utilities/icons";
import ServicesCards from "@/components/ServicesCards/ServicesCards";
import IconButtons from "@/sections/IconButtons";

export const OurServices = () => {
  return (
    <div
      className="w-full flex justify-center items-center flex-col gap-4 my-4"
      id="services"
    >
      <IconButtons Icon={SettingIcon} text="Our Services" />
      <SectionHeading
        heading="Transform your tech
business with tailored
services"
        subHeading="Websites / Applications / Web3 / Blockchain"
      />
      <ServicesCards />
    </div>
  );
};
