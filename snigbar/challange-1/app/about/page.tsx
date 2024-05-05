import CardsWithIcon from "@/components/CardsWithIcon";
import { PointerIcon, VisionIcon } from "@/components/utilities/icons";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 py-8 my-20">
      <div className="text-center space-y-6 w-11/12 md:w-3/5">
        <h1 className="text-5xl">About Us</h1>
        <p className="text-lg font-light w-4/5 mx-auto">
          Watch your operations optimize as our apps streamline workflows and
          drives efficiency for your success.
        </p>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4 w-11/12 md:w-4/5 mx-auto">
        {/* image 1 */}
        <div className="row-span-2">
          <Image
            src="/aboutUsImg1.png"
            alt="services-image"
            height={200}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1">
          <CardsWithIcon
            Icon={VisionIcon}
            heading="Vision"
            learnMore={false}
            subHeadingOne="FYTOBYTE LIMITED envisions a future where businesses harness the power of technology effortlessly. We aim to be the vanguard in creating adaptable, user-centric SaaS solutions that propel enterprises towards success. We envision a digital landscape where our innovative tools and services revolutionize operations, enabling organizations to flourish and stay ahead in an ever-evolving, competitive market, setting new benchmarks for excellence."
            style="gap-4"
          />
        </div>
        {/* content 3 */}
        <div className="row-span-2">
          <Image
            src="/aboutUsImg2.png"
            alt="services-image"
            height={200}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        {/* card 4 */}
        <div className="row-span-1">
          <CardsWithIcon
            Icon={PointerIcon}
            heading="Mission"
            learnMore={false}
            subHeadingOne="FYTOBYTE LIMITED envisions a future where businesses harness the power of technology effortlessly. We aim to be the vanguard in creating adaptable, user-centric SaaS solutions that propel enterprises towards success. We envision a digital landscape where our innovative tools and services revolutionize operations, enabling organizations to flourish and stay ahead in an ever-evolving, competitive market, setting new benchmarks for excellence."
            style="gap-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
