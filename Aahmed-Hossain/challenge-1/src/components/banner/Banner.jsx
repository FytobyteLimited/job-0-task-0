import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/images/banner-image.png";

const Banner = () => {
  return (
    <div className="-mt-32 lg:mb-[30rem] mb-[18rem] ">
      {/* Background image for large screens */}
      <div className="hidden lg:block bg-cover bg-center absolute inset-0 lg:h-[800px] " style={{ backgroundImage: "url('/images/banner-bg.png')" }}></div>
      <div className="pt-48 lg:pt-52 relative z-10">
        <div>
          <h1 className="lg:text-5xl text-2xl text-center font-bold mt-0 lg:mt-8 mb-4">Transform your workflow with <br /> cutting-edge solutions from <br /> FYTOBYTE LIMITED.</h1>
          <h1 className="lg:text-lg text-md text-center font-bold mt-8 mb-8 hidden lg:block">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Aliquid sapiente suscipit amet <br /> optio quia fuga rerum ex cupiditate maiores, <br /> perferendis blanditiis, quam a.</h1>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="bg-black text-white py-2 w-[10rem] rounded-md">Get Started</button>
          <button className="bg-black text-white py-2  w-[10rem] rounded-md">Join Us</button>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-1 lg:mt-[685px] mt-[17rem] 2xl:mt-[30rem]">

        <Image className="lg:w-[35rem] w-[20rem] mt-[13rem]"  src={bannerImg} alt="ball"/>
      </div>
    </div>
  );
};

export default Banner;
