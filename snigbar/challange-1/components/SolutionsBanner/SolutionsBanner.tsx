import Image from "next/image";

const SolutionsBanner = ({
  imageLink,
  heading,
}: {
  imageLink: string;
  heading: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-start border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden`}
    >
      <div className="w-full h-full md:h-[250px] rounded-t-3xl overflow-hidden">
        <Image
          src={imageLink}
          alt="services-image"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:px-10 md:pt-2 md:pb-8 px-6 py-4 w-full text-justify">
        <h1 className="font-semibold my-2">{heading}</h1>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga
          dolor quibusdam eum mollitia soluta. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Earum fuga dolor quibusdam eum mollitia
          soluta.
        </p>
      </div>
    </div>
  );
};

export default SolutionsBanner;
