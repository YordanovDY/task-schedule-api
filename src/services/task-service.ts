import Task from "../models/Task";
import { Category, ITask, Priority } from "../types/task-type";

function create(date: Date, category: Category, priority: Priority, description: string) {
    return Task.create({
        date,
        category,
        priority,
        description, 
        status: 'Pending'
    });
}

const taskService = {
    create
}

export default taskService;