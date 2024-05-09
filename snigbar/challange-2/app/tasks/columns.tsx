"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TTask } from "../interfaces/interfaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircleIcon,
  CircleHelp,
  CircleX,
  MoreHorizontal,
  TimerIcon,
} from "lucide-react";
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
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Title" />;
    },
    cell: ({ row }) => {
      const title = row.getValue("title") as string;
      const trimmedString =
        title.length > 50 ? title.substring(0, 50) + "..." : title;
      return (
        <div className="flex space-x-2">
          <Badge variant="outline">{row.original.label}</Badge>
          <span className="max-w-[500px] truncate font-medium">
            {trimmedString}
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
    cell: ({ row }) => {
      const status = row.original.status;
      if (status === "todo") {
        return (
          <div className="flex gap-1 items-center">
            <CircleHelp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        );
      } else if (status === "in-progress") {
        return (
          <div className="flex gap-1 items-center">
            <TimerIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        );
      } else if (status === "canceled") {
        return (
          <div className="flex gap-1 items-center">
            <CircleX className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        );
      } else {
        return (
          <div className="flex gap-1 items-center">
            <CheckCircleIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
          </div>
        );
      }
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Priority" />;
    },
    cell: ({ row }) => {
      const priority = row.original.priority;

      if (priority === "high") {
        return (
          <div className="flex gap-1 items-center">
            <ArrowUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
          </div>
        );
      } else if (priority === "medium") {
        return (
          <div className="flex gap-1 items-center">
            <ArrowRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
          </div>
        );
      } else {
        return (
          <div className="flex gap-1 items-center">
            <ArrowDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
          </div>
        );
      }
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="CreatedAt" />;
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      return <div>{formattedDate}</div>;
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
              <MoreHorizontal className="h-4 w-4 text-grsy-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
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
