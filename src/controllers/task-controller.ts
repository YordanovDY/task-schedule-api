import { Request, Response } from "express";
import taskService from "../services/task-service";

export async function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response) {
    const { date, category, priority, description } = req.body

    try {
        const result = await taskService.create(task);
        res.json(result)
        
    } catch (err) {
        res.json({ message: 'Internal Server Error', status: 500 });
    }
}

        const result = await taskService.create(date, category, priority, description);
        res.status(201).json(result)

}

export function getMonthlyTasks(req: Request, res: Response) {

}