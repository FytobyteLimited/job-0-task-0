import { Button } from "@/components/ui/button";
import Image from "next/image";
import TableComponent from "./(table)/TableComponent";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between lg:px-24 md:px-10 px-4">
     <TableComponent />
    </main>
  );
}
