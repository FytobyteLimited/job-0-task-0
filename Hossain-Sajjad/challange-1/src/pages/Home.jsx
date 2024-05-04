import Service from "../components/Service";
import Solution from "../components/Solution";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import TopSection from "../components/TopSection";

const Dekstop = () => {
  return (
    <div>
      {/* <Header /> */}
      <main className='w-[1384.7px] flex flex-row items-start justify-start py-0 pr-[27px] pl-[18px] box-border max-w-full'>
        <section className='flex-1 flex flex-col items-start justify-start gap-[81.5px] max-w-full'>
          <div className='self-stretch flex flex-row items-start justify-start pt-0 pb-[58.5px] pr-[13px] pl-[13.5px] box-border max-w-full text-center text-41xl text-gray-100 font-inter'>
            <div className='flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full'>
              <TopSection />
              <Service />
            </div>
          </div>
          <Solution />
          <Faq />
          <Blog />
        </section>
      </main>
    </div>
  );
};

export default Dekstop;
