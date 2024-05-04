import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center w-full h-[138vh] relative">
        <Header />
      </div>

      {/*  */}
      <main className="max-w-screen-xl mx-auto flex flex-col items-center bg-violet-300 h-[200vh]"></main>
    </div>
  );
}
