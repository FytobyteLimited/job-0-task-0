import CardsWithIcon from "@/components/CardsWithIcon";
import IconButtons from "@/components/utilities/IconButtons";
import SectionHeading from "@/components/utilities/SectionHeading";
import { ApiIcon, BookIcon } from "@/components/utilities/icons";
import Image from "next/image";

const KnowledgeBase = () => {
  return (
    <div
      className="w-full flex justify-center items-center flex-col gap-4 my-4"
      id="faq"
    >
      <IconButtons Icon={BookIcon} text="Knowledge Base" />
      <SectionHeading
        heading="FAQ & Documentation"
        subHeading="FYTOBYTE LIMITED provides customers complete entry to
        knowledge base API and documentation."
      />
      {/* image and card */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div className="w-full h-full md:h-[250px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <Image
            src="/robot.png"
            alt="services-image"
            height={300}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>

        <CardsWithIcon
          Icon={ApiIcon}
          heading="Lorem Ipsum"
          subHeadingOne="Create fast and simple"
          subHeadingTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. quae veniam delectus possimus perferendis dolorum, distinctio assumenda vitae aspernatur, temporibus a consequuntur fuga vel neque ctei..."
          learnMore={true}
        />
      </div>
    </div>
  );
};

export default KnowledgeBase;
