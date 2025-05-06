import Task from "../models/Task";
import { Category, Priority, Status } from "../types/task-type";
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

function uStatus(taskId: string, status: Status) {
    return Task.findByIdAndUpdate(taskId, { status: status }, { runValidators: true, new: true });
}

function del(taskId: string) {
    return Task.findByIdAndDelete(taskId);
}

const taskService = {
    create,
    getTasks,
    uStatus,
    del
}

export default taskService;