import Image from "next/image";
import { TTask } from "./interfaces/interfaces";
import { DataTable } from "@/components/data-table";
import { columns } from "./tasks/columns";

const fetchTasks = async (): Promise<TTask[]> => {
  const res = await fetch(
    "https://6637639b288fedf693802fab.mockapi.io/api/tasks"
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await fetchTasks();
  console.log(data.length);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
