import ButtonRounded from "@/shared/ButtonRounded";
import TextGradiant from "@/shared/TextGradiant";
import Image from "next/image";
import React from "react";
import blogImg from "../../../public/images/blog.png";
import { IoNewspaperOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <ButtonRounded text="Tech News" Icon={IoNewspaperOutline} />
        <TextGradiant text="Our Blog & News" />

        <p className="text-normal lg:text-lg text-[#737373] text-center mb-6">
          We share essential insights from the technology sector, AI, <br />
          and the world of software development.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row rounded-xl border bg-[#F5F5F5]">
        <div className="flex flex-col gap-2 p-4   h-72 lg:h-72 w-full lg:w-1/2">
          {/* <h3>
          <FaPiedPiper className="font-bold text-2xl" />
          </h3> */}
          <h4 className="font-bold text-xl dark:text-white">
            Unveiling the Art of Web Design: A Step-by-Step Guide
          </h4>
          <p className="text-xs mt-2">
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly website is crucial for success. Whether
            you&rsquo;re aseasoned designer or a novice looking to dip your toes
            into the world of web design, this step-by- step guide will help you
            create a stunning and effective…
          </p>
          <button className="bg-black text-white text-sm rounded w-[156.45px] text-center py-2 mt-2">
            Learn More
          </button>
        </div>

        <div className=" lg:h-72 w-full lg:w-1/2">
          <Image
            className="h-full w-full rounded-xl"
            src={blogImg}
            alt="service card"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
