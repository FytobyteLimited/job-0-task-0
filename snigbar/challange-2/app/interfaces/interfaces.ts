export type TaskStatus = "todo" | "in-progress" | "done" | "canceled";
export type LabelType = "bug" | "feature" | "enhancement" | "documentation";
export type PriorityType = "low" | "medium" | "high";

export interface TTask {
  _id: string;
  code: string;
  title: string;
  status: TaskStatus;
  label: LabelType;
  priority: PriorityType;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContent {
  [key: string]: string | number | boolean | Date | IContent | null;
}
export interface TTaskContent extends IContent {
  _id: string;
  code: string;
  title: string;
  status: TaskStatus;
  label: LabelType;
  priority: PriorityType;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddTaskResponse {
  success: boolean;
  message: string;
  error?: Error;
}
