"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { labels, priority, status } from "@/constants";
import { Row } from "@prisma/client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation';

interface pageProps {

}


interface fromData {
    title: string;
    label: string;
    status: string;
    priority: string;
}

const CreateATask: React.FC<pageProps> = () => {
    const [open, setOpen] = useState(false)

    const [loading, setLoading] = useState(false);

    const form = useForm()
    const router = useRouter()

    const [lastTaskIndex, setLastTaskIndex] = useState<number>(Date.now())


    const onSubmit = async (data: FieldValues) => {

        const inputData = data as fromData; // Cast data to fromData type

        try {
            setLoading(true)
            const response = await axios.post('/api/task', inputData)
            console.log(response.data.id);
        } catch (error) {
            console.log(error);
        } finally {

            form.reset()
            setOpen(false)
            router.refresh()
            setLoading(false)
        }
    }




    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" >
                    <PlusIcon className="mr-2 size-4" aria-hidden="true" />
                    New task
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create A task</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to create a new task.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Do a kickflip"
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
                                            <SelectTrigger className="capitalize">
                                                <SelectValue placeholder="Select a label" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {labels.map((item) => (
                                                    <SelectItem
                                                        key={item}
                                                        value={item}
                                                        className="capitalize"
                                                    >
                                                        {item}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
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
                                            <SelectTrigger className="capitalize">
                                                <SelectValue placeholder="Select a status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {status.map((item) => (
                                                    <SelectItem
                                                        key={item}
                                                        value={item}
                                                        className="capitalize"
                                                    >
                                                        {item}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
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
                                            <SelectTrigger className="capitalize">
                                                <SelectValue placeholder="Select a priority" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {priority.map((item) => (
                                                    <SelectItem
                                                        key={item}
                                                        value={item}
                                                        className="capitalize"
                                                    >
                                                        {item}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="gap-2 pt-2 sm:space-x-0">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button >Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )


}




export default CreateATask;