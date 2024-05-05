export type TaskStatus = "todo" | "in-progress" | "done" | "canceled";
export type LabelType = "bug" | "feature" | "enhancement" | "documentation";
export type PriorityType = "low" | "medium" | "high";

export interface TTask {
  id: string;
  code: string;
  title: string;
  status: TaskStatus;
  label: LabelType;
  priority: PriorityType;
  createdAt: Date;
  updatedAt: Date;
}
