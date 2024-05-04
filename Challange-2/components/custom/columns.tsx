"use client"

import { formatTitle, formateDate } from "@/lib/utils"
import { Row } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowRight, ArrowUp, ChevronRight, CircleCheck, CircleHelp, CircleX, DeleteIcon, IconNode, LucideAArrowDown, LucideIcon, MoreHorizontal, Timer } from "lucide-react"
import { useRouter } from 'next/navigation';


// local imports
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "../ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { labels, status } from "@/constants"
import axios from "axios"
import { useState } from "react"


const Icons: { [key: string]: LucideIcon; } = {
  // for Priority
  High: ArrowUp,
  Low: ArrowDown,
  Medium: ArrowRight,

  //status icons
  Todo: CircleHelp,
  In_Progress: Timer,
  Done: CircleCheck,
  Canceled: CircleX,

}





export const columns: ColumnDef<Row>[] = [



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
        className="translate-y-0.5"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }, // to get the selection functionalities.

  {
    accessorKey: "name",
    header: "Task",
  },

  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {

      return (
        <div><Badge variant={'outline'} >{row.original.label}</Badge> <span>{formatTitle(row.original.title)}</span> </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {

      const statusStringFormatter = () => {

        if (row.original.status === "In-Progress") {
          return "In_Progress"
        } else {
          return row.original.status
        }

      }

      const Icon = Icons[statusStringFormatter()]

      return (
        <div className="flex items-center">
          <Icon
            className="mr-2 size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <span className="capitalize">{row.original.status}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {

      const Icon = Icons[row.original.priority]

      return (
        <div className="flex items-center">
          <Icon
            className="mr-2 size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <span className="capitalize">{row.original.priority}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {

      const Icon = Icons["Status"]

      return (
        <div className="flex items-center">

          <span className="capitalize">{formateDate(row.original.createdAt.toString())}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return Array.isArray(value) && value.includes(row.getValue(id))
    },
  },

  {
    id: "actions",
    cell: ({ row, table }) => {
      const data = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuItem >
              Edit
            </DropdownMenuItem>


            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Labels </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropDown row={row.original.label} id={row.original.id} />
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />
            <DropdownMenuItem className=" flex justify-between ">Delete <DeleteIcon size={15} /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu >
      )
    },
  },

]



function DropDown({ row, id }: { row: string, id: string }) {

  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const updateLabel = async (data: { id: string, label: string }) => {


    try {
      setLoading(true)
      const response = await axios.patch('/api/task', data);

      if (response.status === 200) {
        router.refresh()
      }
    } catch (error) {
      console.log(error);
    } finally {

      setLoading(false)
    }

  }


  return (
    <>
      <DropdownMenuRadioGroup
        value={row}
        onValueChange={(value) => updateLabel({ id: id, label: value })}
      >
        {
          labels.map((label) => (
            <DropdownMenuRadioItem
              key={label}
              value={label}
              className="capitalize"
              disabled={loading}
            >
              {label}
            </DropdownMenuRadioItem>
          ))
        }
      </DropdownMenuRadioGroup>
    </>
  )
}