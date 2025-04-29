import { Request, Response } from "express";
import taskService from "../services/task-service";
import CreateTaskDto from "../dtos/CreateTask.dto";

export async function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response) {
    const { date, category, priority, description } = req.body

    try {
        if(!date || !category || !priority || !description) {
            res.errors.badRequest('All fields are required!');
            return;
        }

        const result = await taskService.create(date, category, priority, description);
        res.status(201).json(result)

    } catch (err) {
        res.errors.internalServerError();
    }
}

export function getMonthlyTasks(req: Request, res: Response) {

}