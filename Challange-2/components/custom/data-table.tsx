"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState, // visibility related.
  SortingState, // sorting related.
  getSortedRowModel, // sorting related.
  ColumnFiltersState, // filter related.
  getFilteredRowModel, // filter related.
  getPaginationRowModel, // pagination related.
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Download, Plus, Settings2 } from "lucide-react"
import { DataTablePagination } from "./moreFeatures/DataTablePagination"
import CreateATask from "./moreFeatures/CreateATask"
import DeleteSelectedItems from "./moreFeatures/DeleteSelectedItems"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,// sorting 
    getSortedRowModel: getSortedRowModel(),// sorting 
    onColumnFiltersChange: setColumnFilters, // filtering
    getFilteredRowModel: getFilteredRowModel(), // filtering
    onRowSelectionChange: setRowSelection, // selection
    getPaginationRowModel: getPaginationRowModel(), // pagination
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })


  const SelectedRowsData = () => {


  }

  //formatted row that are selected
  const selectedItems = table?.getSelectedRowModel()?.rows?.map(row => row?.original) || [];



  return (

    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter titles..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <div className="flex items-center justify-center gap-3" >



          <DeleteSelectedItems
          //@ts-ignore
            selectedItems={selectedItems}
          />

          <CreateATask />

          <Button variant="outline" className="ml-auto flex items-center justify-center gap-1 ">
            <Download size={14} />
            Export
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto flex gap-1 ">
                <Settings2 size={14} />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">


              <DropdownMenuLabel className="w-40" >Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                )
                .map((column) => {

                  const filterColumns = ["title", "status", "createdAt", "priority"]
                  if (!filterColumns.includes(column.id)) {
                    return null;
                  }

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
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>



        </div>


      </div>
      <div className="rounded-md border">
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
                  )
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-2.5">
        <DataTablePagination table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && true}
      </div>

    </div>
  )
}
