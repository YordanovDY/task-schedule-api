import { Schema, model } from "mongoose";
import { ITask } from "../types/task-type";

const taskSchema = new Schema<ITask>({
    date: { type: Date },
    category: { type: String },
    status: { type: String },
    priority: { type: String },
    description: { type: String },
})

const Task = model<ITask>('Task', taskSchema);

export default Task;