import {
  LabelType,
  PriorityType,
  TaskStatus,
} from "@/app/interfaces/interfaces";
import { kMaxLength } from "buffer";
import mongoose from "mongoose";

export interface ITaskContent extends Document {
  code: string;
  title: string;
  status: TaskStatus;
  label: LabelType;
  priority: PriorityType;
}

// Define the Mongoose schema
const TTaskContentSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    title: { type: String, minLength: 5, maxLength: 120, required: true },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done", "canceled"],
      required: true,
    },
    label: {
      type: String,
      enum: ["bug", "feature", "enhancement", "documentation"],
      required: true,
    },
    priority: { type: String, enum: ["low", "medium", "high"], required: true },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const TaskModel =
  mongoose.models?.Tasks ||
  mongoose.model<ITaskContent>("Tasks", TTaskContentSchema);

export default TaskModel;
