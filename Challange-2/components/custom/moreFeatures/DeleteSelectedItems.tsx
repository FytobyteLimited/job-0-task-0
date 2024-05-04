import { Row } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleX, DeleteIcon, Trash, Trash2, icons } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";


interface pageProps {
    selectedItems: Row[]
}

const DeleteSelectedItems: React.FC<pageProps> = ({ selectedItems }) => {

    const [open, setOpen] = useState(false)

    const { toast } = useToast()

    const dataLength = selectedItems.length

    if (dataLength === 0) return null


    const singleDelete = (id: string) => {

        toast({
            variant: "destructive",
            title: "You've triggered a single-delete action",
            description: `Task identifier:- ${id}`,
        })
    }

    const multiDelete = () => {
        toast({
            variant: "destructive",
            title: "You've triggered a multi-delete action",
            description: `Task identifiers:- ${selectedItems.map(item => item.id).join(" <-> ")}`,
        })
    }


    return (
        <DropdownMenu open={open} >
            <DropdownMenuTrigger asChild onClick={() => setOpen(true)}>
                <Button variant="outline" className="flex items-center justify-center gap-2" > <Trash2 size={14} />  Delete Action
                    <span>{`(${dataLength})`}</span> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 max-w-full">
                <DropdownMenuLabel className="flex items-center justify-between">Selected List
                    <Button size={"icon"} variant={"ghost"} className="size-4" onClick={() => setOpen(false)} ><CircleX size={18} /></Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>

                    <DropdownMenuItem disabled >
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <div className="text-sm">Task</div>

                            <Separator orientation="vertical" />
                            <div>Status</div>

                            <Separator orientation="vertical" />
                            <div className="line-clamp-1">title</div>
                        </div>
                    </DropdownMenuItem>

                    {selectedItems.map(task => (
                        <DropdownMenuItem key={task.id} >
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div className="text-sm">{task.name.split("-")[1]}</div>

                                <Separator orientation="vertical" />
                                <div>{task.status}</div>

                                <Separator orientation="vertical" />
                                <div className="line-clamp-1" title={task.title} >{task.title}</div>
                                <Button className="px-1 py-0" size={'icon'} variant={"ghost"}
                                    onClick={() => singleDelete(task.id)}
                                >
                                    <Trash size={14} className="text-red-300 " />
                                </Button>
                            </div>
                        </DropdownMenuItem>)
                    )}

                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={multiDelete} className="text-red-300" >
                    Delete All
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DeleteSelectedItems;