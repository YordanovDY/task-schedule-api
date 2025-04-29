import { Category, Priority } from "../types/task-type";

export default interface CreateTaskDto {
    date: Date,
    category: Category,
    priority: Priority,
    description: string
}