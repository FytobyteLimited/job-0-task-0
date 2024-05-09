interface props {
  heading: string;
  subHeading: string;
}
const SectionHeading = ({ heading, subHeading }: props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 h-full mx-auto w-4/5 lg:w-1/2 z-40 mt-4 md:mt-0">
      {/* heading */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
        {heading}
      </h1>
      {/* text */}
      <p className="md:text-xl text-[#737373]">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
