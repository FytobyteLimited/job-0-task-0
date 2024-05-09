import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {  Table, TableBody,TableCell,TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogModal } from "./components/ui/DialogModal";

export const data = [
  {
    id: "m5gr84i9",
    status: "Canceled",
    task: "task-001",
    title: "If we program the card,",
    level: "bug",
    priority: "High",
    date: "05/05/2024",
  },
  {
    id: "3u1reuv4",
    status: "✔ Todo",
    task: "task-002",
    title: "we can get to the IP capacitor through the haptic ",
    level: "feature  ",
    priority: "Low",
    date: "5/21/2024",
  },
  {
    id: "derv1ws0",
    status: "✔️Done",
    task: "task-003",
    title: "Generating the matrix won't do anything",
    level: "documentation",
    priority: "Medium",
    date: "6/05/2024",
  },
  {
    id: "5kma53ae",
    status: "success",
    task: "task-004",
    title: "we can get to the IP capacitor through the haptic",
    level: "enhancement",
    priority: "High",
    date: "8/05/2024",
  },
  {
    id: "bhqecj4p",
    status: "Medium",
    task: "task-005",
    title: "We need to program the auxiliary API port!",
    level: "documentation",
    priority: "High",
    date: "3/05/2024",
  },
  {
    id: "m5gr84i9",
    status: "Canceled",
    task: "task-001",
    title: "If we program the card,",
    level: "bug",
    priority: "High",
    date: "05/05/2024",
  },
  {
    id: "3u1reuv4",
    status: "Todo",
    task: "task-002",
    title: "we can get to the IP capacitor through the haptic ",
    level: "feature  ",
    priority: "Low",
    date: "5/21/2024",
  },
  {
    id: "derv1ws0",
    status: "✔️Done",
    task: "task-003",
    title: "Generating the matrix won't do anything",
    level: "documentation",
    priority: "Medium",
    date: "6/05/2024",
  },
  {
    id: "5kma53ae",
    status: "success",
    task: "task-004",
    title: "we can get to the IP capacitor through the haptic",
    level: "enhancement",
    priority: "High",
    date: "8/05/2024",
  },
  {
    id: "bhqecj4p",
    status: "Medium",
    task: "task-005",
    title: "We need to program the auxiliary API port!",
    level: "documentation",
    priority: "High",
    date: "3/05/2024",
  },
  {
    id: "m5gr84i9",
    status: "Canceled",
    task: "task-001",
    title: "If we program the card,",
    level: "bug",
    priority: "High",
    date: "05/05/2024",
  },
  {
    id: "3u1reuv4",
    status: "Todo",
    task: "task-002",
    title: "we can get to the IP capacitor through the haptic ",
    level: "feature  ",
    priority: "Low",
    date: "5/21/2024",
  },
  {
    id: "derv1ws0",
    status: "✔️Done",
    task: "task-003",
    title: "Generating the matrix won't do anything",
    level: "documentation",
    priority: "Medium",
    date: "6/05/2024",
  },
  {
    id: "5kma53ae",
    status: "success",
    task: "task-004",
    title: "we can get to the IP capacitor through the haptic",
    level: "enhancement",
    priority: "High",
    date: "8/05/2024",
  },
  {
    id: "bhqecj4p",
    status: "Medium",
    task: "task-005",
    title: "We need to program the auxiliary API port!",
    level: "documentation",
    priority: "High",
    date: "3/05/2024",
  },
  {
    id: "m5gr84i9",
    status: "Canceled",
    task: "task-001",
    title: "If we program the card,",
    level: "bug",
    priority: "High",
    date: "05/05/2024",
  },
  {
    id: "3u1reuv4",
    status: "Todo",
    task: "task-002",
    title: "we can get to the IP capacitor through the haptic ",
    level: "feature  ",
    priority: "Low",
    date: "5/21/2024",
  },
  {
    id: "derv1ws0",
    status: "✔ Done",
    task: "task-003",
    title: "Generating the matrix won't do anything",
    level: "documentation",
    priority: "Medium",
    date: "6/05/2024",
  },
  {
    id: "5kma53ae",
    status: "success",
    task: "task-004",
    title: "we can get to the IP capacitor through the haptic",
    level: "enhancement",
    priority: "High",
    date: "8/05/2024",
  },
  {
    id: "bhqecj4p",
    status: "Medium",
    task: "task-005",
    title: "We need to program the auxiliary API port!",
    level: "documentation",
    priority: "High",
    date: "3/05/2024",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "task",
    header: "Task",
    cell: ({ row }) => <div className="uppercase">{row.getValue("task")}</div>,
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => <span className="text-sm font-semibold py-[1px] px-2  border rounded-lg ">{row.getValue("level")}</span>,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
        className=""
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-sm font-semibold">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
        className="text-left"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="uppercase ">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("priority")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);
      return <div className="text-center font-medium">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Level</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


export default function App() {
 
const [task, setTask] = React.useState(data);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-2">
        <Input
          placeholder="Filter task..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
       <div className="flex gap-2">
        {/* dialog modal */}
       <DialogModal setTask={setTask}/>
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
          
            <Button variant="outline" className="ml-auto py-1">
              View <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
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
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center gap-6">
          {/* Rows numbers */}
<div>
<span className="text-sm font-semibold">Rows Per Page </span>
          <select
            className="p-1 border rounded-md text-sm font-semibold"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                 {pageSize}
              </option>
            ))}
          </select>
</div>
          {/* page numbers */}
          <span className="flex items-center gap-1">
            <div className="text-sm font-semibold">Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1}{" "}
              <span className="mr-1">of</span>
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          {/* prev and next button */}
          <div className="flex gap-2">
            <button
              className="border rounded p-1"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
