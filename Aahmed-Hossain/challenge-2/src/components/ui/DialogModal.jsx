/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";

const FormSchema = z.object({
  title: z.string({
      required_error: "Please write an title.",
    }),
    label: z.string({
    required_error: "Please select a lebel.",
  }),
  status: z.string({
    required_error: "Please select a status.",
  }),
  priority: z.string({
    required_error: "Please select a priority.",
  }),
});

export function DialogModal({setTask}) {
  
  
  const [open, setOpen] = React.useState(false);
 
  return (
    <Dialog open={open}  onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">✛ Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
          <DialogDescription>
          
Fill in the details below to create a new task.
          </DialogDescription>
        </DialogHeader>
        <AddTaskForm setTask={setTask} />
      </DialogContent>
    </Dialog>
  );
}

const AddTaskForm = ({setTask}) => {
  function closeModal() {
    (!open)
  }
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    const defaultId = Math.random().toString(36).substr(2, 9); 
    const defaultDate = new Date().toISOString().slice(0,10); 
    const newData = {
      id: defaultId,
      date: defaultDate,
      ...data
  };
    console.log("data:",newData);
    setTask((prevTasks)=>[...prevTasks, 
      newData

      // {
      //   id: "5kma53ae",
      //   status: "success",
      //   task: "task-004",
      //   title: "we can get to the IP capacitor through the haptic",
      //   level: "enhancement",
      //   priority: "High",
      //   date: "8/05/2024",
      // },
    ])
    

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid gap-1">
          <div className="grid gap-1 w-full">
            {/* Use FormField instead of direct Select component */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Textarea
                    required_error
                      placeholder="Title"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bug">
                        Bug
                      </SelectItem>
                      <SelectItem value="feature">Feature</SelectItem>
                      <SelectItem value="enhancement">
                        enhancement
                      </SelectItem>
                      <SelectItem value="documentation">
                        Documentation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Use FormMessage to display form errors */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                       
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="todo">
                        Todo
                      </SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                      <SelectItem value="In Progress">
                        In Progress
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                       
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Low">
                        Low
                      </SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">
                        High
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end"><Button onClose={closeModal} type="submit">Submit</Button></div>
      </form>
    </Form>
  );
};
