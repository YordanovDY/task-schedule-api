import Task from "../models/Task";
import { Category, Priority } from "../types/task-type";
import { getMonthRange } from "../utils/date-util";

function create(date: Date, category: Category, priority: Priority, description: string) {
    return Task.create({
        date,
        category,
        priority,
        description,
        status: 'Pending'
    });
}

function getTasks(year: number, month: number) {
    const { start, end } = getMonthRange(year, month);

    return Task.find({ date: { $gte: start, $lte: end } });
}

const taskService = {
    create,
    getTasks
}

export default taskService;