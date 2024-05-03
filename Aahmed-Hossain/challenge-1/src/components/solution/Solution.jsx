import React from "react";
import Image from "next/image";
import { solutionData } from "@/data/data";
import { IoMdUmbrella } from "react-icons/io";
import ButtonRounded from "@/shared/ButtonRounded";
import TextGradiant from "@/shared/TextGradiant";

const Solution = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center my-6">
        <ButtonRounded text="Our Solution" Icon={IoMdUmbrella} />
      </div>
      <div>
        <TextGradiant
          text="Streamlining operations  <br />
unleashing seamless digital  <br />
solutions"
        />
      </div>
      <p className="text-normal lg:text-lg text-[#737373] text-center my-6">
      Innovative solutions for seamless digital transformation.
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
        {solutionData.map((item) => (
          <div
            key={item.id}
            className="max-w-xl overflow-hidden bg-white rounded-xl shadow-md dark:bg-gray-800"
          >
            <Image
              className="object-cover w-full h-52"
              src={item.img}
              width={500}
              height={500}
              alt="Article"
            />

            <div className="p-4">
              <div>
                <h1 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white">
                  {item.title}
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
