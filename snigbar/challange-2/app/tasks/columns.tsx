"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TTask } from "../interfaces/interfaces";

export type Tasks = Pick<
  TTask,
  "code" | "title" | "status" | "label" | "priority" | "createdAt"
>;

export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "code",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt")).toLocaleDateString();
      return <div>{date}</div>;
    },
  },
];
