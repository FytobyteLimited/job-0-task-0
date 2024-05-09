
import React from "react";
import { SiKnowledgebase } from "react-icons/si";
import { FaPiedPiper } from "react-icons/fa";
import Image  from 'next/image';
import faq from '../../../public/images/faq.png'
import ButtonRounded from "../ui/ButtonRounded";
import TextGradiant from "../ui/TextGradiant";
// import { ButtonRounded } from '@/components/ui/ButtonRounded';
// import { TextGradiant } from '@/components/ui/TextGradiant';



const Faq = () => {
  return (
    <div className="my-16">
         <div className="flex justify-center my-6">
      <ButtonRounded text="Knowledge Base" icon={<SiKnowledgebase/>} />
       </div>
      <TextGradiant text="FAQ & Documentation" />
      <p className="text-normal lg:text-lg text-[#737373] text-center mt-2 mb-6">
        FYTOBYTE LIMITED provides customers complete <br /> entry to <br />
        knowledge base API and documentation.
      </p>
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-8">
      <div className=" rounded-xl lg:h-60 w-full lg:w-1/2">
          <Image
            className="h-full w-full rounded-xl"
            src={faq}
            alt="service card"
            height={500}
            width={500}
          />
        </div>
        <div className="flex flex-col gap-2 p-4 rounded-xl border  bg-[#F5F5F5] h-72 lg:h-60 w-full lg:w-1/2">
          <h3>
          <FaPiedPiper className="font-bold text-2xl" />
          </h3>
          <h4 className="font-bold text-xl dark:text-white">Lorem Ipsum</h4>
          <p className="text-xs mt-2">
          Sign up and access our intuitive platform. Upload your data effortlessly,
then customize preferences. Our robust tools analyze and generate
insights promptly. Collaborate seamlessly with team members using
integrated communication features. Watch your operations optimize as
our app streamlines workflows and drives efficiency for your success.
          </p>
          <button
      className='bg-black text-white text-sm rounded w-[156.45px] text-center py-2 mt-2'
    >
      Learn More
    </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
