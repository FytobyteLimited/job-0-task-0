"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LabelType, TTask } from "../interfaces/interfaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "@/components/Table-Column-Header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialogDelete } from "@/components/DeleteTask/DeleteTask";
import UpdateLabel from "@/components/UpdateLabel/UpdateLabel";
import { EditTask } from "@/components/EditTask/EditTask";

export type Tasks = Pick<
  TTask,
  "_id" | "code" | "title" | "status" | "label" | "priority" | "createdAt"
>;

export const columns: ColumnDef<Tasks>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
        className="rounded-lg"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="rounded-lg "
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "code",
    header: "Task",
    // cell: ({ row }) => {
    //   return (
    //     <div className="">
    //       {(row.getValue("_id") as string).substring(0, 8)}
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Title" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge variant="outline">{row.original.label}</Badge>
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Priority" />;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="CreatedAt" />;
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt")).toLocaleDateString();
      return <div>{date}</div>;
    },
  },

  {
    id: "acitons",
    cell: ({ row }) => {
      const task = row.original;
      const id = row.original._id;
      const label = row.original.label;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <EditTask task={task} />
            <DropdownMenuSeparator />
            <UpdateLabel id={id} label={label} />
            <AlertDialogDelete id={id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
