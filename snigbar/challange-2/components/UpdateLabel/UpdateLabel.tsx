import React, { ChangeEvent, FormEventHandler, useState } from "react";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import { labelOptions } from "@/lib/constants";
import { useToast } from "../ui/use-toast";
import { updateTaskLabel } from "@/lib/actions";

const UpdateLabel = ({ id, label }: { id: string; label: string }) => {
  const { toast } = useToast();

  const handleChange = async (value: string) => {
    const result = await updateTaskLabel(id, value);

    if (result.success) {
      toast({
        title: "Label updated",
        description: result.message || "Label updated",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.message || "There was a problem to updating label",
      });
    }
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuRadioGroup value={label} onValueChange={handleChange}>
          {labelOptions.map((label) => (
            <DropdownMenuRadioItem key={label} value={label}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};

export default UpdateLabel;
