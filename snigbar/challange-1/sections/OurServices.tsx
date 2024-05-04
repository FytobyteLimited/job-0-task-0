import SectionHeading from "@/components/utilities/SectionHeading";
import IconButtons from "@/components/utilities/IconButtons";
import { SettingIcon } from "@/components/utilities/icons";
import ServicesCards from "@/components/ServicesCards/ServicesCards";

export const OurServices = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 my-4">
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
