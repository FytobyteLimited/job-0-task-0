import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, label, status, priority } = body;

    if (!title || !label || !status || !priority) {
      return new NextResponse(
        "Please provide all the Necessary data.",
        { status: 500 }
      );
    }

    const lastIndex = await prismadb.row.count();

    const result = await prismadb.row.create({
      data: {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        label: label.charAt(0).toUpperCase() + label.slice(1),
        status: status.charAt(0).toUpperCase() + status.slice(1),
        priority:
          priority.charAt(0).toUpperCase() + priority.slice(1),
        name: `TASK-${lastIndex + 1}`,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(`[TASK_POST]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const { label, id } = body;

    if (!id) {
      return new NextResponse(
        "Unauthorized",
        { status: 403 }
      );
    }
 if (!label) {
      return new NextResponse(
        "Please provide all the Necessary data.",
        { status: 500 }
      );
    }

    const result = await prismadb.row.update({
      where: {
        id: id,
      },
      data: {
        label: label,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(`[TASK_UPDATE]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
