import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/images/banner-image.png";

const Banner = () => {
  return (
    <div className="min-h-[120vh] -mt-32 mb-96">
      {/* Background image for large screens */}
      <div className="hidden lg:block bg-cover bg-center absolute inset-0 lg:h-[800px] " style={{ backgroundImage: "url('/images/banner-bg.png')" }}></div>
      <div className="pt-56 relative z-10">
        <div>
          <h1 className="lg:text-5xl text-2xl lg:w-[50vw] w-[80vw] mx-auto text-center font-bold mt-8 mb-4">Transform your workflow with cutting-edge solutions from FYTOBYTE LIMITED.</h1>
          <h1 className="lg:text-lg text-md lg:w-[45vw] w-[75vw] mx-auto text-center font-bold mt-8 mb-8 hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores, perferendis blanditiis, quam a.</h1>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="bg-black text-white p-2 rounded-md">Get Started</button>
          <button className="bg-black text-white p-2 rounded-md">Join Us</button>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-1 lg:mt-[130vh] mt-[50vh] ">

        <Image className="lg:w-[40vw] w-[60vw] mt-[30vh]" src={bannerImg} alt="ball"/>
      </div>
    </div>
  );
};

export default Banner;
