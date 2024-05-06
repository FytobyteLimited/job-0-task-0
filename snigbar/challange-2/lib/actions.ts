"use server";
import { revalidatePath } from "next/cache";

import { connectToDB } from "./connection";
import TaskModel from "./models/model";
import { Result } from "postcss";
import { TTask } from "@/app/interfaces/interfaces";

// export const createTasktoDB = async (data: taskData) => {
//   try {
//     if (!data) throw new Error("no data");

//     const response = await fetch("/api/tasks", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       revalidatePath("/");
//       return {
//         success: true,
//         message: "task added successfully",
//         data: await response.json(),
//       };
//     } else {
//       return {
//         success: false,
//         message: "failed to add task",
//       };
//     }
//   } catch (error) {
//     return {
//       success: false,
//       message: "failed to add task",
//       error: error,
//     };
//   }
// };

export const createTasktoDB = async (data: FormData) => {
  await connectToDB();
  try {
    if (!data) throw new Error("no data!");
    const task = Object.fromEntries(data);

    const newTask = new TaskModel(task);
    await newTask.save();

    if (newTask) {
      revalidatePath("/");
      return {
        success: true,
        message: "task added successfully",
      };
    } else {
      return {
        success: false,
        message: "failed to add task",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "failed to add task",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "failed to add task",
    };
  }
};

export const getAlltasks = async (): Promise<TTask[]> => {
  await connectToDB();

  const tasks = await TaskModel.find({});
  return tasks;
};
