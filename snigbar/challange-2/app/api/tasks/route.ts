import { connectToDB } from "@/lib/connection";
import TaskModel from "@/lib/models/model";
import { taskSchma } from "@/lib/schema/addTaskSchema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export const GET = async () => {
  await connectToDB();

  const res = await TaskModel.find({});

  return NextResponse.json(res);
};

export const POST = async (req: NextRequest) => {
  await connectToDB();
  const task = await req.json();
  const parsed = await taskSchma.parseAsync(task);

  try {
    if (!parsed) {
      throw new Error("failed to parse data");
    }
    task.code = uuid().slice(8);

    const data = await TaskModel.create(task);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
