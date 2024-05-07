import { DataTable } from "@/components/data-table";
import { columns } from "./tasks/columns";
import { getAlltasks } from "@/lib/actions";

export default async function Home() {
  const data = await getAlltasks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
