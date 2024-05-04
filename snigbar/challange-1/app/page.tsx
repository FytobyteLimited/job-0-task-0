import Header from "@/components/Header/Header";
import KnowledgeBase from "@/sections/KnowledgeBase";
import { OurServices } from "@/sections/OurServices";
import OurSolutions from "@/sections/OurSolutions";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center w-full h-[138vh] relative">
        <Header />
      </div>

      {/*  */}
      <main className="max-w-screen-xl mx-auto flex flex-col gap-4 md:gap-8 lg:gap-16 items-center my-4 px-4">
        <OurServices />
        <OurSolutions />
        <KnowledgeBase />
      </main>
    </div>
  );
}
