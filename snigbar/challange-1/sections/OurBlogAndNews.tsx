import IconButtons from "@/components/utilities/IconButtons";
import SectionHeading from "@/components/utilities/SectionHeading";
import { NewsIcon } from "@/components/utilities/icons";
import Image from "next/image";

export default function OurBlogAndNews() {
  return (
    <div
      className="w-full flex justify-center items-center flex-col gap-4 my-4"
      id="knowledge"
    >
      <IconButtons Icon={NewsIcon} text="Tech News" />
      <SectionHeading
        heading="Our Blog & News"
        subHeading="We share essential insights from the technology sector, AI,
        and the world of software development."
      />
      {/* images and cta */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden justify-items-center">
        <div className="md:px-10 md:py-6 px-6 py-4 flex flex-col justify-between items-start gap-2 basis-[30%]">
          <h1 className="font-semibold">
            Unveiling the Art of Web Design: A Step-by-Step Guide
          </h1>
          <p className="text-sm font-light w-1/2 text-justify">
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly website is crucial for success. Whether
            you&rsquo;re aseasoned designer or a novice looking to dip your toes
            into the world of web design, this step-by- step guide will help you
            create a stunning and effective…
          </p>

          <button className="w-24 md:w-40 h-10 bg-primary-dark dark:bg-white rounded-md text-white dark:text-primary-dark font-light text-sm text-center mx-auto md:mx-0">
            Learn More
          </button>
        </div>

        {/* image */}
        <div className="w-full h-full md:h-[250px] overflow-hidden">
          <Image
            src="/OurBlogImg.png"
            alt="services-image"
            height={200}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
