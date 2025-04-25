import { Request, Response } from "express";
import taskService from "../services/task-service";

export async function createTask(req: Request, res: Response) {
    const task = req.body;

    try {
        const result = await taskService.create(task);
        res.json(result)
        
    } catch (err) {
        res.json({ message: 'Internal Server Error', status: 500 });
    }
}

export function getDailyTasks(req: Request, res: Response) {

}

export function getMonthlyTasks(req: Request, res: Response) {

}