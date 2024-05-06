import z from "zod";

export const taskSchma = z.object({
  title: z
    .string()
    .min(5, { message: "minimum 5 characters long" })
    .max(120, { message: "maximum 120 characters long" }),
  status: z.enum(["todo", "in-progress", "done", "canceled"]),
  label: z.enum(["bug", "feature", "enhancement", "documentation"]),
  priority: z.enum(["low", "medium", "high"]),
});
