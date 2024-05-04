import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full h-[110vh] md:bg-header-background bg-no-repeat bg-cover mx-auto -z-20">
      {/* header contents */}
      <div className="flex flex-col items-center justify-center text-center gap-4 h-full mx-auto w-4/5 lg:w-3/5 z-40 mt-4 md:mt-0">
        {/* heading */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold md:leading-[30px] lg:leading-[60px] gradient-text">
          Transform your workflow with cutting-edge solutions from FYTOBYTE
          LIMITED.
        </h1>
        {/* text */}
        <p className="lg:text-2xl md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores,
          perferendis blanditiis, quam a.
        </p>
        {/* cta buttons */}
        <div className="flex justify-between items-center gap-3">
          <button className="w-24 md:w-40 h-10 bg-primary-dark dark:bg-white rounded-md text-white dark:text-primary-dark font-light text-sm text-center">
            Get Started
          </button>
          <button className="w-24 md:w-40 h-10 bg-primary-dark dark:bg-white rounded-md text-white dark:text-primary-dark font-light text-sm text-center">
            Join Us
          </button>
        </div>
        {/* hero image */}
        <Image
          src="/headerImageCloth.png"
          alt="header image"
          height={500}
          width={500}
          className="absolute bottom-0 -z-10"
        />
      </div>
    </div>
  );
};

export default Header;
