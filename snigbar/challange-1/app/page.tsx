import Header from "@/components/Header/Header";
import { OurServices } from "@/sections/OurServices";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center w-full h-[138vh] relative">
        <Header />
      </div>

      {/*  */}
      <main className="max-w-screen-xl mx-auto flex flex-col items-center my-4">
        <OurServices />
      </main>
    </div>
  );
}
