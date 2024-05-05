import React from "react";
import { TbSettingsCog } from "react-icons/tb";
import "./styles.css";
import { BsCloudSun } from "react-icons/bs";
import { LuCode2 } from "react-icons/lu";
import Image from "next/image";
import service1 from "../../../public/images/service-1.png";
import service2 from "../../../public/images/service-2.png";
import TextGradiant from "../ui/TextGradiant";
import ButtonRounded from "../ui/ButtonRounded";
const Service = () => {
  return (
    <div className="  mt-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <ButtonRounded text="Our Service" icon={<TbSettingsCog/>} />
        <TextGradiant text="Transform your tech <br /> business with tailored <br /> services"/>

        <p className="text-normal lg:text-lg text-[#737373] text-center mb-6">
          Websites / Applications / Web3 / Blockchain
        </p>
      </div>
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center  ">
        {/* with cloud icon card */}
        <div className="flex  flex-col  gap-2 p-4 rounded-xl border  bg-[#F5F5F5] w-7/12 lg:w-4/12 mx-auto ">
          <h3>
            <BsCloudSun />
          </h3>
          <h4 className="font-bold tet-xl dark:text-white">Lorem Ipsum</h4>
          <p className="text-xs">Create Fast And Simple</p>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet... consectetur adipisicing elit. Sit, eos
            voluptatem quo laborum perferendis eligendi voluptas nam dignissimos
            hic dolorem inventore…
          </p>
        </div>
        {/* long width card */}
        <div className="w-full h-52 lg:h-block lg:w-8/12 mx-auto rounded-xl">
          <Image
            className="h-full w-full rounded-xl"
            src={service1}
            alt="service card"
            height={500}
            width={500}
          />
        </div>
      </div>
      {/* second line service cards */}
      <div className="flex flex-col lg:flex-row gap-8 my-8">
      
          <div className="flex  lg:flex-row gap-4 lg:gap-8 w-full lg:w-8/12">
            {/*2nd image card */}
            <div className="w-1/2  h-48 lg:h-block mx-auto rounded-xl">
              <Image
                className="h-full w-full rounded-xl"
                src={service2}
                alt="service card"
                height={500}
                width={500}
              />
            </div>
            {/* with code icon card */}
            <div className="flex flex-col gap-2 p-2 lg:p-4 rounded-xl border  bg-[#F5F5F5] w-1/2  mx-auto ">
              <h3>
                <LuCode2 />
              </h3>
              <h4 className="font-bold tet-xl dark:text-white">
                Custom Web Development
              </h4>
              <p className="text-xs">SPA / MPA</p>
              <p className="text-xs mt-2">
                Tailored website solutions to meet specific business needs and
                goals.
              </p>
            </div>
          </div>

          {/* with code and bg gradiant card */}
          <div className="flex flex-col gap-2 p-4 rounded-xl border  bg-[#F5F5F5] mx-auto bg-gradiant w-6/12 lg:w-4/12">
            <h3>
              <LuCode2 />
            </h3>
            <h4 className="font-bold tet-xl dark:text-white">
              Custom Web Development{" "}
            </h4>
            <p className="text-xs">SPA / MPA</p>
            <p className="text-xs mt-2">
              Tailored website solutions to meet specific business needs and
              goals.
            </p>
          </div>
      
      </div>
    </div>
  );
};

export default Service;
