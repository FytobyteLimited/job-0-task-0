
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Service from "@/components/service/Service";
import Solution from "@/components/solution/Solution";

export default function Home() {
  return (
    <main>
      <div className=" w-11/12 lg:w-10/12 mx-auto  ">
      <Banner/>
      <Service/>
      <Solution/>
      <Faq/>
      <Blog/>
      <Footer/>
      </div>
    </main>
  );
}
