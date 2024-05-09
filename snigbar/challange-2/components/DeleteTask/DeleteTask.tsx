"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteTask } from "@/lib/actions";
import { DeleteIcon } from "lucide-react";
import { useToast } from "../ui/use-toast";

export function AlertDialogDelete({ id }: { id: string }) {
  const { toast } = useToast();
  //   handle task delete
  const handleDelete = async (taskId: string) => {
    const result = await deleteTask(taskId);
    if (result.success) {
      toast({
        title: "Task Deleted...",
        description: result.message || "deleted successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.message || "There was a problem to deleting task",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-full px-2 text-[14px] flex items-center justify-between cursor-pointer">
          <p>Delete</p>
          <DeleteIcon className="w-5 h-4 text-gray-500" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will delete your task
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
