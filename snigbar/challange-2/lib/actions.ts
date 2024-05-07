"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./connection";
import TaskModel from "./models/model";
import { TTask } from "@/app/interfaces/interfaces";
import { Tasks } from "@/app/tasks/columns";

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

// get all task
export const getAlltasks = async (): Promise<TTask[]> => {
  await connectToDB();

  const tasks = await TaskModel.find({});
  return JSON.parse(JSON.stringify(tasks));
};
// delete task

export const deleteTask = async (id: string) => {
  await connectToDB();
  try {
    const result = await TaskModel.deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      revalidatePath("/");
      return {
        success: true,
        message: "Task deleted",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete task",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "failed to delete",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "failed to delete",
    };
  }
};

export const updateTaskLabel = async (id: string, label: string) => {
  await connectToDB();
  try {
    const result = await TaskModel.findByIdAndUpdate(id, { label });

    if (result) {
      revalidatePath("/");
      return {
        success: true,
        message: "Task label updated",
      };
    } else {
      return {
        success: false,
        message: "Unable to update task label",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "failed to update",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "failed to update",
    };
  }
};

export const updateTasks = async (id: string, data: Partial<Tasks>) => {
  await connectToDB();

  try {
    const result = await TaskModel.findOneAndUpdate({ _id: id }, { ...data });
    console.log(result);
    if (result) {
      revalidatePath("/");
      return {
        success: true,
        message: "Task updated",
      };
    } else {
      return {
        success: false,
        message: "Unable to update task",
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: "failed to update",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "failed to update",
    };
  }
};
