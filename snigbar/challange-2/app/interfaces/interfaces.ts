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

export interface IContent {
  [key: string]: string | number | boolean | Date | IContent | null;
}
export interface TTaskContent extends IContent {
  id: string;
  code: string;
  title: string;
  status: TaskStatus;
  label: LabelType;
  priority: PriorityType;
  createdAt: Date;
  updatedAt: Date;
}

export interface TTaskContent {
  id: string;
  code: string;
  title: string;
  status: string;
  label: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}
