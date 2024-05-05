import { TTaskContent } from "@/app/interfaces/interfaces";
import { Table } from "@tanstack/react-table";
import xlsx, { IJsonSheet } from "json-as-xlsx";

export function downloadToExcel<TData>(table: Table<TData>) {
  const data = table
    .getRowModel()
    .rows.map((val) => val.original as TTaskContent);

  let columns: IJsonSheet[] = [
    {
      sheet: "Tasks",
      columns: [
        { label: "ID", value: "id" },
        { label: "Title", value: "title" },
        { label: "Label", value: "label" },
        { label: "Priority", value: "priority" },
        { label: "Status", value: "status" },
        { label: "CreatedAt", value: "createdAt" },
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: `TaskSheet-${new Date().getDate().toLocaleString}`,
  };

  xlsx(columns, settings);
}
