import { LabelType } from "@/app/interfaces/interfaces";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircleIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleX,
  TimerIcon,
} from "lucide-react";

export const statusOptions = ["todo", "in-progress", "done", "canceled"];
export const labelOptions: LabelType[] = [
  "bug",
  "feature",
  "enhancement",
  "documentation",
];
export const priorityOptions = ["low", "medium", "high"];

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "todo",
    label: "Todo",
    icon: CircleHelpIcon,
  },
  {
    value: "in-progress",
    label: "In Progress",
    icon: TimerIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircleIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleX,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
