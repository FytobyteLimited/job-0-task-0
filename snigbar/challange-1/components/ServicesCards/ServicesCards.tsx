import Image from "next/image";
import CardsWithIcon from "../CardsWithIcon";
import { CodeIcon, SunIcon } from "../utilities/icons";

const ServicesCards = () => {
  return (
    <div className="w-full grid grid-cols-2 align-middle lg:grid-cols-3 md:auto-rows-fr justify-items-center gap-2 md:gap-4 mt-4">
      <CardsWithIcon
        Icon={SunIcon}
        heading="Lorem Ipsum"
        subHeadingOne="Create fast and simple"
        subHeadingTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quae veniam delectus possimus perferendis dolorum, distinctio assumenda vitae aspernatur, temporibus a consequuntur fuga vel neque..."
        learnMore={false}
        style="bg-[#D4D4D4] dark:bg-[#404040] col-span-2 md:col-span-1"
      />
      <div className="w-full h-full md:h-[250px] col-span-2 rounded-3xl overflow-hidden">
        <Image
          src="/serivicesImageOne.png"
          alt="services-image"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full md:h-[250px] col-span-1 rounded-3xl overflow-hidden">
        <Image
          src="/servicesImageTwo.png"
          alt="services-image"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <CardsWithIcon
        Icon={CodeIcon}
        heading="Lorem Ipsum"
        subHeadingOne="Create fast and simple"
        subHeadingTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quae veniam delectus possimus perferendis dolorum, distinctio assumenda vitae aspernatur, temporibus a consequuntur fuga vel neque..."
        learnMore={false}
        style="bg-[D4D4D4] dark:bg-[404040] col-span-1"
      />
      <CardsWithIcon
        Icon={CodeIcon}
        heading="Lorem Ipsum"
        subHeadingOne="Create fast and simple"
        subHeadingTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quae veniam delectus possimus perferendis dolorum, distinctio assumenda vitae aspernatur, temporibus a consequuntur fuga vel neque..."
        learnMore={false}
        style="bg-gradient-to-b from-purple-600/50 to-indigo-300/20 col-span-2 md:col-span-1"
      />
    </div>
  );
};

export default ServicesCards;
