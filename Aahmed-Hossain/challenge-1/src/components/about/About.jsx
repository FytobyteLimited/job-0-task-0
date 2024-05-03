import Image from "next/image";
import React from "react";
import aboutImg1 from "../../../public/images/about-1.png";
import aboutImg2 from "../../../public/images/about-2.png";
import { TbDeviceVisionPro } from "react-icons/tb";
import { RiFocus2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className="my-16">
      <h1 className="text-7xl font-normal text-center">About Us</h1>
      <p className="text-sm text-[#A3A3A3] my-10 text-center">
        Watch your operations optimize as our apps streaminline workflows and
        drives <br /> efficiency for success.
      </p>
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* left container  */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 lg:gap-16 ">
          {/* mission image card */}
          <div className="w-full h-[800px] rounded-xl">
            <Image
              className="bg-cover w-full h-[800px] rounded-xl"
              src={aboutImg1}
              alt="contact image"
              height={400}
              width={500}
            />
          </div>
          {/* mission info card */}
          <div className="flex flex-col gap-2 p-6 rounded-xl border  bg-[#F5F5F5] ">
            <h3>
              <RiFocus2Line className="font-bold text-2xl" />
            </h3>
            <h4 className="font-bold text-xl dark:text-white">Mission</h4>
            <p className="text-xs mt-2">
              At FYTOBYTE LIMITED, our mission is to revolutionize the business
              landscape by delivering innovative SaaS solutions that empower
              growth and efficiency. We strive to create seamless, user-centric
              software that simplifies complex processes, enabling businesses to
              thrive in a rapidly evolving digital world. With a commitment to
              excellence and technological advancement, we aim to be the driving
              force behind our clients success and transformation.
            </p>
          </div>
        </div>
        {/* right container */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-4">
            {/* vision info card */}
          <div className="flex flex-col gap-2 p-6 rounded-xl border  bg-[#F5F5F5] ">
            <h3>
              <TbDeviceVisionPro className="font-bold text-2xl" />
            </h3>
            <h4 className="font-bold text-xl dark:text-white">Vision</h4>
            <p className="text-xs mt-2">FYTOBYTE LIMITED envisions a future where businesses harness the power of technology effortlessly. We aim to be the vanguard in creating adaptable, user-centric SaaS solutions that propel enterprises towards success. We envision a digital landscape where our innovative tools and services revolutionize operations, enabling organizations to flourish and stay ahead in an ever-evolving, competitive market, setting new benchmarks for excellence.
            </p>
          </div>

          {/* vision image card */}
          <div className="w-full h-[800px] rounded-xl">
            <Image
              className="bg-cover w-full h-[800px] rounded-xl"
              src={aboutImg2}
              alt="contact image"
              height={400}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
