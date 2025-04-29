import { Schema, model } from "mongoose";
import { ITask } from "../types/task-type";
import { Category, Priority, Status } from "../enums/task-enums";

const taskSchema = new Schema<ITask>({
    date: { type: Date, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    status: { type: String, enum: Object.values(Status), required: true },
    priority: { type: String, enum: Object.values(Priority), required: true },
    description: { type: String, required: true },
})

const Task = model<ITask>('Task', taskSchema);

export default Task;