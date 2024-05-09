"use client";
import { Table } from "@tanstack/react-table";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DownloadIcon, SlidersHorizontalIcon, XCircleIcon } from "lucide-react";
import { downloadToExcel } from "@/lib/downloadToCSV";
import { CreateTask } from "./createTask/CreateTask";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { priorities, statuses } from "@/lib/constants";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableMenubar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex flex-1 items-center gap-2 space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event: any) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] rounded-md border border-slate-400 py-4"
        />

        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XCircleIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* add task */}
        <CreateTask />

        {/* download csv */}
        <Button
          size="sm"
          onClick={() => downloadToExcel(table)}
          variant="outline"
          className="ml-auto h-8 lg:flex border-slate-200 flex justify-between items-center gap-2"
        >
          <DownloadIcon className="w-4 h-4 text-primary" />
          Export
        </Button>
        {/* data table column filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 lg:flex border-slate-200"
            >
              <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
