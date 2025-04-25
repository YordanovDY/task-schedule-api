import Task from "../models/Task";
import { ITask } from "../types/task-type";

function create(task: ITask) {
    return Task.create({...task, status: 'Pending'});
}

const taskService = {
    create
}

export default taskService;